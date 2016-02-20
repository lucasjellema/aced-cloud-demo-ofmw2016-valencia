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
      var transformFunction =  transform.actSummarySOAP2REST;
      var acts = resultArray.map(transformFunction);
      responseMessage = JSON.stringify(acts);
      res.status(200).send(responseMessage);
    }
    res.end();
  };
 
  var optionsList = {uri: '/mobile/connector/actsSOAP/getProposedActs'};
  optionsList.headers = {'content-type': 'application/json;charset=UTF-8'};
  var outgoingMessage = {Header: null, Body: {"getProposedActs": null}};
  optionsList.body = JSON.stringify(outgoingMessage);
  var r = req.oracleMobile.rest.post(optionsList, handler);
};

exports.getActDetailsById = function (req, res) {
    var result = {};
    res.send(200, result);
};


