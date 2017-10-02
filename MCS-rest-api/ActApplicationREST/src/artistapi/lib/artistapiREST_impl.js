var transform = require("./actTransformationsREST");

const GETACTSRESOURCE =  'acedemoacts';

exports.getActs = function (req, res) {
    var date = addedSince(req);
    var minimum = req.query.minimumVotes ? req.query.minimumVotes : 0;
    var max = req.query.max ? req.querymax : 0;
    var properties;
    if (addedSince) {
        properties = {mininumNumberOfVotes: minimum, addedSince: date, maxNumberOfProposals: max};
    } else {
        properties = {minimumNumberOfVotes: minimum, maxNumberOfProposals: max};
    }

    req.oracleMobile.connectors.RESTActsAPI.get(GETACTSRESOURCE, null, {qs: properties}).then(
            function (result) {
                if (result.statusCode === 204) {
                    var message = "no content sent back, please check the headers";
                    console.error(message);
                    logToOMC('errorMessage ' + message + ' from getActs', req);
                    res.status(result.statusCode).send(result.result);
                } else if (result.statusCode === 200) {
                    console.info('result.result: ', result.result);
                    jsonResult = JSON.parse(result.result);
                    var resultArray = jsonResult.proposedActs.ProposedActSummary;
                    console.info('resultArray: ', resultArray);
                    var transformFunction = transform.actSummaryREST2REST;
                    var acts = resultArray.map(transformFunction);
                    logToOMC('returned ' + acts.length + ' acts', req);
                    res.status(result.statusCode).send(acts);
                }
            },
            function (error) {
                var errorMessage = "error occurred in function call to REST connector";
                console.error(errorMessage, error.error);
                logToOMC(errorMessage, req);
                res.status(error.statusCode).send(error.error);
            }

    );

};

function addedSince(request) {
    if (request.query.addedSince || request.query.addedSince !== '') {
        return null;
    } else {
        return request.query.addedSince;
    }
}


exports.getActDetailsById = function (req, res) {
    var parameters = '/proposedacts/?proposedActId=' + req.params.id;
    
    var errorMessage;
    req.oracleMobile.connectors.RESTActsAPI.get(GETACTSRESOURCE + parameters).then(
            function (result) {
                if (result.statusCode === 204) {
                    errorMessage = "no content sent back, please check the headers";
                    console.error(errorMessage);
                    logToOMC(errorMessage, req);
                    res.status(result.statusCode).send({});
                } else if (result.statusCode === 200) {
                    var responseMessage = '';
                    var resultJson = JSON.parse(result.result);
                    if (resultJson.proposedActDetails) {
                        var act = resultJson.proposedActDetails;
                        removeNullAttrs(act);
                        var actResponse = transform.actDetailsREST2REST(act);
                        logToOMC('returned ' + actResponse.name + ' from MCS', req);
                        responseMessage = JSON.stringify(actResponse);
                        res.status(result.statusCode).send(responseMessage);
                    }
                } else if (result.statusCode === 400) {
                    responseMessage = "Invalid act ID " + req.params.id;
                    logToOMC(responseMessage, req);
                    res.status(400).send(responseMessage);
                }
            },
            function (error) {
                errorMessage = 'error occurred when calling REST connector getActDetailsById';
                console.error(errorMessage, error.error);
                logToOMC(errorMessage, req);
                res.status(error.statusCode).send(error.error);
            }

    );
};

function removeNullAttrs(obj) {
    for (var k in obj)
    {
        var value = obj[k];
        if (value) {
            if (typeof value === "object" && value['@nil'] === 'true') {
                delete obj[k];
            }
            // recursive call if an object
            else if (typeof value === "object") {
                removeNullAttrs(value);
            }
        } else {
            delete obj[k];
        }
    }
}
;

function logToOMC(logMessage, request) {

    logResourceName = 'logger-api';

    var logBody = {
        logLevel: "info",
        module: "mcs.artists-apis",
        message: logMessage
    };

    request.oracleMobile.connectors.OMCLoggerAPI.post(logResourceName, logBody, {inType: 'json'}, {}).then(
            function (result) {
                console.finest('log result ', result.result);
            },
            function (error) {
                console.error('log error ' + error.error);
            }
    );
}
;


