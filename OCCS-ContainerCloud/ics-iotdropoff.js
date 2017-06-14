var https = require('https'),
    http = require('http'),
    fs = require('fs'),
    //httpProxy = require('http-proxy'),
    url = require('url'),
    request = require('request');
//    dateFormat = require('dateformat');

var logger = require("./logger.js");
var settings = require("./proxy-settings.js");

var moduleName = "occs.icsProxy";
var moduleVersion = "0.19";
var ICS_ENDPOINT = "https://ics4emeapartner-partnercloud17.integration.us2.oraclecloud.com/integration/flowapi/rest";
var RESOURCE_IOTCS_DROPOFF = "ACEDEMO_IOTCSDROPO_INTEGRATIO/v01/act";

var ICS_IOTCS_DROPOFF_ENDPOINT = ICS_ENDPOINT + '/' + RESOURCE_IOTCS_DROPOFF;

var icsDropoffProxy = module.exports;

icsDropoffProxy.registerListeners = function (app) {
    var path = '/icsProxy/iotcs-dropoff';
    console.log("Register listener for POST to " + '/icsProxy/iotcs-dropoff');
    app.post(path, function (req, res) {
        icsDropoffProxy.handleIoT(req, res);
    });
}

icsDropoffProxy.handleIoT = function (req, res) {
    logger.log("Handle IoT CS call to report new artist proposal for  " + JSON.stringify(req.body), moduleName, logger.DEBUG);
    var iotmessage = req.body;
    var artist = iotmessage.payload.data.data_artistname;
    var countOfArtist = iotmessage.payload.data.count_of_data_artistname_15;
    icsDropoffProxy.reportArtistProposal(artist, countOfArtist);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "status": "message was sent to ICS" }));
}


icsDropoffProxy.reportArtistProposal = function (artist, countOfArtist) {
    logger.log("Call ICS to report new artist proposal for  " + artist, moduleName, logger.DEBUG);

    var options = {
        method: 'POST',
        url: ICS_IOTCS_DROPOFF_ENDPOINT
        ,
        headers:
        {
            'cache-control': 'no-cache',
            authorization: 'Basic c3Zlbi5iZXJuaGFyZHRAb3BpdHotY29uc3VsdGluZy5jb206JHYzTjMzODFf',
            'content-type': 'application/json'
        },
        body:
        {
            "id": 1,
            "source": "ics-iotdropoff",
            "sentTime": null,
            "eventTime": null,
            "payload": {
                "data": {
                    "count_of_data_artistname": countOfArtist
                    , "max_of_data_artistname": artist
                }
            }
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) {
            console.log(moduleName + "- Error in processing IoT Dropoff message " + JSON.stringify(error));
            throw new Error(error);
        }
        console.log(moduleName + " Forwarded IoT Dropoff Message to ICS: status= " + response.statusCode);

    });




}

console.log(moduleName + " version " + moduleVersion + " running against ICS Endpoint " + ICS_ENDPOINT);
