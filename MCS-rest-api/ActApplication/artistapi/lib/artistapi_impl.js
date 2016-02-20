var transform = require("./actTransformations");

exports.getActs = function (req, res) {
    var handler = function (error, response, body) {
        var responseMessage = body;
        if (error) {
            res.status(500).send(error.message);
        } else if (parseInt(response.statusCode) === 200) {
            var json = JSON.parse(body);
            var resultArray = json.Body.getProposedActsResponse.result;
            removeNullAttrs(resultArray);
            var transformFunction = transform.actSummarySOAP2REST;
            var acts = resultArray.map(transformFunction);
            responseMessage = JSON.stringify(acts);
            res.status(200).send(responseMessage);
        }
        res.end();
    };

    var optionsList = {uri: '/mobile/connector/actsSOAP/getProposedActs'};
    optionsList.headers = {'content-type': 'application/json;charset=UTF-8'};
    var outgoingMessage = { 
        Body: {"getProposedActsRequestMessage": {
          "mininumNumberOfVotes":req.params.minimumVotes,
          "addedSince":req.params.addedSince,
          "maxNumberOfProposals" : req.params.max
        }}};
    optionsList.body = JSON.stringify(outgoingMessage);
    var r = req.oracleMobile.rest.post(optionsList, handler);
};

exports.getActDetailsById = function (req, res) {
    var handler = function (error, response, body) {
        var responseMessage = body;
        var statusCode = response.statusCode;
        if (error) {
            res.status(500).send(error.message);
        } else if (parseInt(response.statusCode) === 200) {
            var json = JSON.parse(body);
            if (json.Body.getActDetailsByIdResponse) {
                var act = json.Body.getActDetailsByIdResponse.result;
                removeNullAttrs(act);
                var actResponse = transform.actDetailsSOAP2REST(act);
                responseMessage = JSON.stringify(actResponse);
                res.status(200).send(responseMessage);
            } else {
                responseMessage = "Invalid act ID " + req.params.id;
                res.status(400).send(responseMessage);
            }
        }
        res.end();
    };

    var optionsList = {uri: '/mobile/connector/actsSOAP/getProposedActsDetails'};
    optionsList.headers = {'content-type': 'application/json;charset=UTF-8'};
    var outgoingMessage = {Body: {"getProposedActDetailsRequestMessage": {"proposedActId": req.params.id}}};
    optionsList.body = JSON.stringify(outgoingMessage);
    var r = req.oracleMobile.rest.post(optionsList, handler);

};

function removeNullAttrs(obj) {
    for (var k in obj)
    {
        var value = obj[k];
        if (typeof value === "object" && value['@nil'] === 'true') {
            delete obj[k];
        }
        // recursive call if an object
        else if (typeof value === "object") {
            removeNullAttrs(value);
        }
    }

    var optionsList = {uri: '/mobile/connector//getDepartments'};
    optionsList.headers = {'content-type': 'application/json;charset=UTF-8'};
    var outgoingMessage = {Body: {"getDepartments": {"departmentId": req.params.id}}};
    optionsList.body = JSON.stringify(outgoingMessage);
    var r = req.oracleMobile.rest.post(optionsList, handler);
}
;


