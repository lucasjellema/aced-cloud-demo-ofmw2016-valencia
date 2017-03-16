var https = require('https'),
    http = require('http'),
    fs = require('fs'),
    url = require('url'),
    request = require('request'),
    qs = require('querystring'),
    bodyParser = require('body-parser')
    ;

var mv = require('./multivalue.js');
// not available locally, only on ACCS 
var settings = require("./proxy-settings.js");

// Create a client that will "talk" to CCS
//var Client = require("node-rest-client").Client;

//var client = new Client();


var cacheAPI = module.exports;
var apiURL = "/cache-api";


var CCSHOST = process.env.CACHING_INTERNAL_CACHE_URL || process.exit(0);
var baseCCSURL = 'http://' + CCSHOST + ':8080/ccs/';
// The name of our cache
var cacheName = 'soaringCache';


cacheAPI.registerListeners =
    function (app) {

        app.get(apiURL + '/about', function (req, res) {
            console.log('cache-api: about');
            handleAbout(req, res);
        });
        app.get(apiURL + '/:keyString', function (req, res) {
            console.log('Cache-API GET');
            console.log('Cache-API GET params '+JSON.stringify(req.params));
            var keyString = req.params.keyString;

            // Issue the GET -- our callback function will return the response
            // to the user
            /*          client.get(CCSHOST.concat('/').concat(cacheName).concat('/').concat(keyString),
                          function (valString, rawResponse) {
                              var responseBody = {};
          
                              // If nothing there, return not found
                              if (rawResponse.statusCode == 404) {
                                  responseBody['error'] = 'Key not found error.';
                              }
                              else {
                                  // Create the response to the caller.
                                  // Note: valString is a Buffer object.
                                  responseBody['key'] = keyString;
                                  responseBody['value'] = valString.toString();
                              }
          
                              // Send the response
                              response.json(responseBody).end();
                          });
          */
        });// get

        app.put(apiURL + '/:keyString', function (req, res) {
            // Get the key and value
            console.log('Cache-API PUT - now show params');
            console.log('Cache-API PUT params '+JSON.stringify(req.params));
           
         	var keyString = req.query['keyString'];	// to retrieve value of query parameter called artist (?artist=someValue&otherParam=X)

            var valString = req.body.value;

            // Build the args for the request
            var args = {
                data: valString,
                headers: { "Content-Type": "application/octet-stream" }
            };
 var route_options ={};

            // Issue the PUT -- the callback will return the response to the user
            route_options.method = "PUT";
            route_options.uri = baseCCSURL.concat('/').concat(cacheName).concat('/').concat(keyString);
            route_options.body = args.data;
            route_options.headers = args.headers;



            request(route_options, function (error, rawResponse, body) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(rawResponse.statusCode);
                    console.log("BODY:" + JSON.stringify(body));
                    // Proper response is 204, no content.
                    var responseBody = {};
                    if (rawResponse.statusCode == 204) {
                        responseBody['status'] = 'Successful.';
                    }
                    else {
                        responseBody['error'] = 'PUT returned error '.concat(rawResponse.statusCode.toString());
                    }
                    // Send the response
                    res.json(responseBody).end();
                }//else
            });//request

            /*            client.put(CCSHOST.concat('/').concat(cacheName).concat('/').concat(keyString),
                            args,
                            function (valString, rawResponse) {
                                // Proper response is 204, no content.
                                var responseBody = {};
                                if (rawResponse.statusCode == 204) {
                                    responseBody['status'] = 'Successful.';
                                }
                                else {
                                    responseBody['error'] = 'PUT returned error '.concat(rawResponse.statusCode.toString());
                                }
                                // Send the response
                                response.json(responseBody).end();
                            });
            
                            */
        });//put

        app.post(apiURL + '/:keyString', function (req, res) {
            console.log("POST:" + JSON.stringify(req))
            // Get the key and value from request
            var keyString = req.params.keyString;
            var valString = req.body.value;
            var oldValString = req.body.oldValue;

            // Make a MultiValue object and put in oldValue, then newValue
            var mMultival = mv.makeMultiValue();
            mMultival.append(oldValString);
            mMultival.append(valString);
            var encodedmv = mMultival.encode();

            // Build the args for the POST
            var args = {
                data: encodedmv,
                headers: {
                    "Content-Type": "application/x-multivalue-octet-stream",
                    "X-Method": "replaceValue"
                }
            };

            // Issue the POST -- the callback will return the response to the user
            route_options.method = "POST";
            route_options.uri = baseCCSURL.concat('/').concat(cacheName).concat('/').concat(keyString);
            route_options.body = args.data;
            route_options.headers = args.headers;



            request(route_options, function (error, rawResponse, body) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(rawResponse.statusCode);
                    console.log("BODY:" + JSON.stringify(body));
                    // Proper response is 204, no content.
                    var responseBody = {};
                    if (rawResponse.statusCode == 204) {
                        responseBody['status'] = 'Successful.';
                    }
                    else {
                        responseBody['error'] = 'PUT returned error '.concat(rawResponse.statusCode.toString());
                    }
                    // Send the response
                    res.json(responseBody).end();
                }//else
            });//request


            /*
            client.post(CCSHOST.concat('/').concat(cacheName).concat('/').concat(keyString),
                args,
                function (valString, rawResponse) {
 
                    // Proper response is 204, no content.
                    var responseBody = {};
 
                    if (rawResponse.statusCode == 204) {
                        responseBody['status'] = 'Successful.';
                    }
                    else {
                        responseBody['error'] = 'POST returned error '.concat(rawResponse.statusCode.toString());
                    }
                    // Send the response
                    response.json(responseBody).end();
                });

                */
        });//post


    }

handleAbout = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Cache-API - About - Version " + settings.APP_VERSION + ". ");
    res.write("Supported URLs:");
    res.write(apiURL + "/key (GET)");
    res.write(apiURL + "/key (POST)");
    res.write(apiURL + "/key (PUT)");
    res.write("incoming headers" + JSON.stringify(req.headers));
    res.end();
}

console.log("Cache API (version "+settings.APP_VERSION+") initialized at " + apiURL+" running against CACHE Service URL "+ baseCCSURL);
