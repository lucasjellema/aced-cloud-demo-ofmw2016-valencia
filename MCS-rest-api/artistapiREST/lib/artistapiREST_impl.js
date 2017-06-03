var transform = require("./actTransformationsREST");

exports.getActs = function (req, res) {
    console.log('in getActs');
    logToOMC('in getActs', req);
	
	var date = addedSince(req);
	var minimum = req.query.minimumVotes ? req.query.minimumVotes : 0;
	var max = req.query.max ? req.querymax : 0;
	var properties; 
	if(addedSince){
		properties = {mininumNumberOfVotes:minimum, addedSince:date, maxNumberOfProposals : max};
	}
	else {
		properties = {minimumNumberOfVotes:minimum, maxNumberOfProposals : max};
	}
				
    req.oracleMobile.connectors.RESTActsAPI.get("OfmAcedemoActsApi", null, {qs:properties}).then(
		function(result){
		if(result.statusCode == 204){
			console.error ("no content sent back, please check the headers");
			res.send(result.statusCode, acts);
		} else if (result.statusCode == 200){
			console.info('result.result: ', result.result);
			jsonResult = JSON.parse(result.result);
			var resultArray = jsonResult.proposedActs.ProposedActSummary;
			console.info('resultArray: ', resultArray);
			var transformFunction = transform.actSummaryREST2REST;
			var acts = resultArray.map(transformFunction);
			res.send(result.statusCode, acts);
			}
		},
		function(error){
			console.error('error occurred in function call to REST connector', error.error);
			res.send(500, error.error);
		}
			
    );
		
};

function addedSince(request){
	if (request.query.addedSince || request.query.addedSince != ''){
		 console.info('no addedSince parameter');
		 return null;
	}
	else{
		console.info('addedSince: ' + request.query.addedSince);
		return request.query.addedSince;
	}
}


exports.getActDetailsById = function (req, res) {
    console.log('in getActDetailsById');
    logToOMC('in getActDetailsbyId', req);
       
	var parameters = '?proposedActId=' + req.params.id;
	resource = 'OfmAcedemoActsApi/proposedacts'; 
	
     req.oracleMobile.connectors.RESTActsAPI.get(resource + parameters).then(
		function(result){
			if(result.statusCode == 204){
				console.error ("no content sent back, please check the headers");
				res.send(result.statusCode, acts);
			}
			else if( result.statusCode = 200){
				var responseMessage = '';
				console.log('result.result: ' + result.result);
				var resultJson = JSON.parse(result.result);
				console.log("resultJson: ", resultJson);
				if (resultJson.proposedActDetails) {
					var act = resultJson.proposedActDetails;
					removeNullAttrs(act);
					var actResponse = transform.actDetailsREST2REST(act);
					responseMessage = JSON.stringify(actResponse);
					res.send(result.statusCode, responseMessage);
				}
			}
			else if(result.statusCode==400)  {
                responseMessage = "Invalid act ID " + req.params.id;
                res.status(400).send(responseMessage);
            }
        },
		function(error){
			console.error('error occurred when calling soap connector getActDetailsById', error.error);
			res.send(500, error.error);
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
        }
        else{
            delete obj[k];
        }
    }
};

function logToOMC(logMessage, request){
	console.log("in logToOMC");
	
	logResourceName='logger-api';
    
	var logBody = { 
						logLevel:"info",
						module:"mcs.artists-apis",
						message:logMessage
                }
  
	request.oracleMobile.connectors.OMCLoggerAPI.post(logResourceName, logBody,{inType: 'json'}, {}).then(
		function(result){
			console.log('log result ', result.result);
		},
		function(error){
			console.log('log error ' + error.error);
		}
	);
}; 
 

