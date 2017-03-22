var request = require('request');
var logger = require("./logger.js");
var settings = require("./proxy-settings.js");
var cacheAPI = require("./cache-api.js");
var eventhubAPI = require("./eventhub-api.js");

var logProcessor = module.exports;
var moduleName = "accs.logProcessor";

var refreshInterval = 15; //seconds

// the log processor will check the EventHub every refreshInterval seconds for all messages from the logger
// it will create a batch of log messages and send them to the Logger REST API (that writes it to the WLS Diagnostics file)

var eventHubConsumerGroupName = "loggerConsumer2";
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


function checkLogs() {
    // console.log('check likes');
    eventhubAPI.createConsumerGroup(eventHubConsumerGroupName, function (response) {
        //console.log("after create consumer group "+response);
        eventhubAPI.getMessagesFromConsumerGroup(eventHubConsumerGroupName, function (response) {
            //  console.log("Events: ");
            //console.log(response.body);
            var messages = JSON.parse(response.body);
            if (messages) {
                processLogs(messages);
            }

        }); // eventHubAPI get messages
    }); //eventhubAPI create consumer group


}//checkLogs

function processLogs(messages, offset) {
    var batches = {}
    for (index = 0; index < messages.length; ++index) {
        console.log("index = " + index);
        console.log("msg  = " + messages[index]);

        msg = messages[index];
        // only process messages beyond the current offset
        if (msg.offset > logOffset && msg.key == 'log') {
            if (!batches[msg.value.module]) {
                console.log("new module : " + msg.value.module);
                batches[msg.value.module] = { "module": msg.value.module, "messages": [] }
            };
            batches[msg.value.module].messages.push({ "message": msg.value.message, "logLevel": msg.value.logLevel });
        }//if
    }//for
    // send batches of log messages to REST API, grouped by  module
    for (module in batches) {
        if (batches.hasOwnProperty(module))
            console.log("post batch for " + module);
        postLogBatch(batches[module]);
    }// for


    if (settings.runLocally()) {
        console.log("Log-processor: run locally, so  no cache interaction");
    } else {
        // fetch logging document from cache
        // add latest logging at the top
        // slice array at the bottom
        // put back in the cache
console.log("Log-processor:L try to fetch from cache: "+logDocumentKey);
        cacheAPI.getFromCache(logDocumentKey, function (response) {
            try {
                var logsDoc;
                if (response.statusCode == '404') {
console.log("Log-processor:not found in cache");
                    logsDoc = likesDoc = {
                        "offset": 0
                        , "timestamp": Date.now()
                        , "logs": []
                    }
                }
                else { logsDoc = response.value 
                console.log("Log-processor: found in cache");
    
                };


                logsDoc.timestamp = Date.now();
                if (messages) {
                    // reverse messages to have last/most recent one first
                    messages.reverse();
                    // merge new messages with existing logs
                    // retain no more than 200 entries
                    logsDoc.logs = messages.concat(logsDoc.logs).slice(0,200);

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
    }// not local

    // loop over all properties of object batches - i.e. the names of all modules -- ; for each property, post the messages property
    if (messages && messages.length > 0) {
        logOffset = messages[messages.length - 1].offset;
    }
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
    console.log("body for batch message logging: " + args.data);



    request(route_options, function (error, rawResponse, body) {
        if (error) {
            console.log(JSON.stringify(error));
        } else {
            console.log(rawResponse.statusCode);
            console.log("BODY:" + JSON.stringify(body));
        }//else
    }); //request
}//postLogBatch