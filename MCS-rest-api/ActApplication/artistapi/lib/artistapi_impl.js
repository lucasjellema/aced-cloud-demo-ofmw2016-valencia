var transform = require("./actTransformations");

exports.getActs = function (req, res) {
    console.log('in getActs');
    var handler = function (error, response, body) {
        console.log('body: ', body);
        var responseMessage = body;
        if (error) {
            res.status(500).send(error.message);
        } else if (parseInt(response.statusCode) === 200) {
            var json = JSON.parse(body);
            var resultArray = json.Body.getProposedActsResponseMessage.proposedActs.ProposedActSummary;
            removeNullAttrs(resultArray);
            var transformFunction = transform.actSummarySOAP2REST;
            var acts = resultArray.map(transformFunction);
            responseMessage = JSON.stringify(acts);
            res.status(200).send(responseMessage);
        }
        res.end();
    };

    var optionsList = {uri: '/mobile/connector/ActsSOAP/getProposedActs'};
    optionsList.headers = {'content-type': 'application/json;charset=UTF-8'}; 
    
    var minimumVotes = req.query.minimumVotes ? req.query.minimumVotes : 0;
    
    var outgoingMessage = {Header: null,
        Body: {"getProposedActsRequestMessage": {
                "mininumNumberOfVotes": minimumVotes,
                "addedSince": req.query.addedSince,
                "maxNumberOfProposals": req.query.max
            }}};
    optionsList.body = JSON.stringify(outgoingMessage);
    console.log('optionsList: ', optionsList);
    var r = req.oracleMobile.rest.post(optionsList, handler);
};

exports.getActDetailsById = function (req, res) {
    console.log('in getActDetailsById');
    var handler = function (error, response, body) {
        var responseMessage = body;
        var statusCode = response.statusCode;
        if (error) {
            res.status(500).send(error.message);
        } else if (parseInt(response.statusCode) === 200) {
            var json = JSON.parse(body);
            if (json.Body.getProposedActDetailsResponseMessage) {
                var act = json.Body.getProposedActDetailsResponseMessage.proposedActDetails;
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

    var optionsList = {uri: '/mobile/connector/ActsSOAP/getProposedActDetails'};
    optionsList.headers = {'content-type': 'application/json;charset=UTF-8'};
    var outgoingMessage = {Header: null, Body:
                {"getProposedActDetailsRequestMessage":
                            {"proposedActId": req.params.id}
                }
    };
    optionsList.body = JSON.stringify(outgoingMessage);
    var r = req.oracleMobile.rest.post(optionsList, handler);

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
        }
        else{
            delete obj[k];
        }
    }
}
;


