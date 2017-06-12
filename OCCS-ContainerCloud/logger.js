var request = require('request')
    ;
var settings = require("./proxy-settings.js");

var logger = module.exports;

var loggerRESTAPIURL = "http://129.144.151.143/SoaringTheWorldAtRestService/resources/logger/log";
var apiURL = "/logger-api";
var logprocessorAPI = require("./log-processor.js");

logger.DEBUG = "debug";
logger.INFO = "info";
logger.WARN = "warning";
logger.ERROR = "error";

logger.log =
    function (message, moduleName, loglevel) {

        /* POST:
      
  {
      "logLevel" : "info"
      ,"module" : "soaring.clouds.accs.artist-api"
      , "message" : "starting a new logger module - message from ACCS"
  	
  }
  */
        var logRecord = {
            "logLevel": loglevel
            , "module": "soaring.clouds." + moduleName
            , "message": message
            , "timestamp": Date.now()
        };
        logprocessorAPI.addLog(logRecord);
    }//logger.log

logger.registerListeners =
    function (app) {
        app.post(apiURL, function (req, res) {
            // Get the key and value
            console.log('Logger-API POST - now show params');
            console.log('body in request' + JSON.stringify(req.body));
            console.log("content type " + req.headers['content-type']);
            var logRecord = req.body;
            console.log("value submitted in POST to be logged " + JSON.stringify(logRecord));
            logger.log(logRecord.message, logRecord.module, logRecord.logLevel);
            var responseBody = {};
            responseBody['status'] = 'Successful.';
            // Send the response
            res.json(responseBody).end();

        });//post
    }//registerListeners

console.log("Logger API (version " + settings.APP_VERSION + ") initialized at " + apiURL + " running against Logger Service URL " + loggerRESTAPIURL);
