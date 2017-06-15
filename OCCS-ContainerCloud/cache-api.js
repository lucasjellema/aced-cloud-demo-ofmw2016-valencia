// this module leverages the cache-api rest api that is running on ACCS and interacts directly with 
var https = require('https'),
    http = require('http'),
    fs = require('fs'),
    url = require('url'),
    request = require('request'),
    qs = require('querystring'),
    bodyParser = require('body-parser')
    ;
var logger = require("./logger.js");

var mv = require('./multivalue.js');
// not available locally, only on ACCS 
var settings = require("./proxy-settings.js");

var cacheAPI = module.exports;
var apiURL = "/cache-api";
var moduleName = "soaring.cacheAPI";

var CACHE_API_URL = "https://artist-enricher-api-partnercloud17.apaas.us6.oraclecloud.com/cache-api";


cacheAPI.registerListeners =
    function (app) {

        app.get(apiURL + '/about', function (req, res) {
            console.log('cache-api: about');
            handleAbout(req, res);
        });
        handleAbout = function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("Cache-API - About - Version " + settings.APP_VERSION + ". ");
            res.write("Supported URLs:");
            res.write(apiURL + "/key (GET)");
            res.write(apiURL + "/key (POST)");
            res.write(apiURL + "/key (PUT)");
            res.write("incoming headers" + JSON.stringify(req.headers));
            res.end();
        }//handleAbout
    }//registerListeners



cacheAPI.getFromCache = function (key, callback) {
    // make request to tweet collector
    request(CACHE_API_URL + '/' + key, function (error, response, body) {
        // Send the response
        callback(body);
    })//request

}//getFromCache

cacheAPI.putInCache = function (key, value, callback) {
    console.log("putInCache Callback = " + callback);
    var options = {
        method: 'PUT',
        url: CACHE_API_URL + '/' + key
        ,
        headers:
        {
            'content-type': 'application/json'
        },
        body: value,
        json: true
    };

    request(options, function (error, rawResponse, body) {
        if (error) {
            console.error("Error in putting " + key + " in cache " + JSON.stringify(error));
        }
        else {
            console.log("Put document under " + key + " in cache");
        }
        var responseBody = {};
        if (rawResponse.statusCode == 204) {
            responseBody['status'] = 'Successful.';
        }
        else {
            responseBody['error'] = 'PUT returned error '.concat(rawResponse.statusCode.toString());
        }
        if (callback) { callback(responseBody) }
    })//request
}//putInCache


console.log(moduleName + " (version " + settings.APP_VERSION + ") initialized at " + apiURL);
