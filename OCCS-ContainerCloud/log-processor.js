var request = require('request');
var logger = require("./logger.js");
var settings = require("./proxy-settings.js");
var cacheAPI = require("./cache-api.js");

var logProcessor = module.exports;
var moduleName = "soaring.logProcessor";

var refreshInterval = 15; //seconds

// the log processor will check the EventHub every refreshInterval seconds for all messages from the logger
// it will create a batch of log messages and send them to the Logger REST API (that writes it to the WLS Diagnostics file)

var logDocumentKey = "log-tail";
var logOffset = 0;
var bulkloggerRESTAPIURL = "http://129.144.151.143/SoaringTheWorldAtRestService/resources/logger/bulklog";

initHeartbeat = function (interval) {
    setInterval(function () {
        checkLogs();
    }
        , interval ? interval * 1000 : refreshInterval
    ); // setInterval 3000 is 3 secs
}//initHeartbeat


initHeartbeat(refreshInterval)
console.log("Log Processor (version " + settings.APP_VERSION + ") initialized with refreshInterval of " + refreshInterval + " seconds.");

var logs = [];

logProcessor.addLog = function (logRecord) {
    logs.push(logRecord);
}

function checkLogs() {
    if (logs && logs.length>0) {
        console.log("*** Log Processor: has collected log messages to process");
        processLogs(logs);
        logs = [];
    } else {
        console.log("*** Log Processor: no log messages available");
    }
}//checkLogs

function processLogs(logs) {
    var batches = {}
    for (index = 0; index < logs.length; ++index) {

        log = logs[index];
        // only process messages beyond the current offset
        if (!batches[log.module]) {
            console.log("*** Log Processor: new module : " + log.module);
            batches[log.module] = { "module": log.module, "messages": [] }
        }; //if
        batches[log.module].messages.push({ "message": log.message, "logLevel": log.logLevel });
    }//for
    // send batches of log messages to REST API, grouped by  module
    for (module in batches) {
        if (batches.hasOwnProperty(module))
            console.log("*** Log Processor post batch for " + module);
        postLogBatch(batches[module]);
    }// for


    // fetch logging document from cache
    // add latest logging at the top
    // slice array at the bottom
    // put back in the cache
    console.log("Log-processor: try to fetch from cache: " + logDocumentKey);
    cacheAPI.getFromCache(logDocumentKey, function (response) {
        try {
            var logsDoc;
            if (response.statusCode == '404') {
                console.log("Log-processor:not found in cache");
                logsDoc = {
                    "offset": 0
                    , "timestamp": Date.now()
                    , "logs": []
                }
            }
            else {
                logsDoc = response.value
                console.log("Log-processor: found in cache");

            };


            logsDoc.timestamp = Date.now();
            if (logs) {
                // reverse messages to have last/most recent one first
                logs.reverse();
                // merge new messages with existing logs
                // retain no more than 200 entries
                logsDoc.logs = logs.concat(logsDoc.logs).slice(0, 200);

            }
            console.log("LOGS REAL: %%%%%%%%%%%%%%%%%%%" + JSON.stringify(logsDoc));
            cacheAPI.putInCache(logDocumentKey, JSON.stringify(logsDoc), function (response) {
                console.log("put logsdoc in cache " + response);

            });//putInCache
        }
        catch (e) {
            console.log("Exception in checkLogs" + e);
            console.log("Exception in checkLogs" + JSON.stringify(e));
        }
    });//getFromCache

    // loop over all properties of object batches - i.e. the names of all modules -- ; for each property, post the messages property
}//processLogs   

function postLogBatch(batch) {
    /* {
        "logLevel" : "error"
        ,"module" : "postman.nl.amis.logger.bulklogging2.from.the.other.side"
        , "messages" : [ {"message" : "special warning from external app", "logLevel" : "info"}
                       , {"message" : "special warning2 from external app", "logLevel" : "warn"}
                       , {"message" : "special warning3 from external app", "logLevel" : "warn"}
                       , {"message" : "special warning4 from external app", "logLevel" : "error"}
                       , {"message" : "OMC event at AMIS", "logLevel" : "debug"}
                       , {"message" : "Information on OMC event at AMIS", "logLevel" : "info"}
                       , {"message" : "what if the application does not produce a log file that Log Analytics knows how to process?"}
                       ]
    }*/

    var args = {
        data: JSON.stringify(batch),
        headers: { "Content-Type": "application/json" }
    };

    var route_options = {};

    // Issue the POST  -- the callback will return the response to the user
    route_options.method = "POST";
    //            route_options.uri = baseCCSURL.concat(cacheName).concat('/').concat(keyString);
    route_options.uri = bulkloggerRESTAPIURL;
    console.log("Logger Target URL " + route_options.uri);

    route_options.body = args.data;
    route_options.headers = args.headers;
    console.log("*** Log Processor Logger body for batch message logging: " + args.data);



    request(route_options, function (error, rawResponse, body) {
        if (error) {
            console.log("*** Log Processor " + JSON.stringify(error));
        } else {
            console.log("*** Log Processor " + rawResponse.statusCode);
            console.log("*** Log Processor " + "BODY:" + JSON.stringify(body));
        }//else
    }); //request
}//postLogBatch