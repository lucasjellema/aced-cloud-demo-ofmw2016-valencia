
console.log("NodeJS runtime version " + process.version);
var settings = require("./proxy-settings.js");

console.log('Application version ' + settings.APP_VERSION);


var http = require('http'),
	request = require('request'),
	util = require('util'),
	express = require('express'),
	bodyParser = require('body-parser') // npm install body-parser

	;

var logger = require("./logger.js");
var cacheAPI = require("./cache-api.js");
//var tweetCollector = require("./TweetCollector.js");
var likesProcessor = require("./likes-processor.js");
var logProcessor = require("./log-processor.js");
var moduleName = "occs.Soaring-API";


//var PORT = 5100;
var PORT = process.env.PORT || settings.PORT;

var appVersion = "0.1.3";

var app = express();
var server = http.createServer(app);


server.listen(PORT, function () {
	console.log('Server running, version ' + settings.APP_VERSION + ', Express is listening... at ' + PORT + " for Artist Enricher API");
});


console.log('server running on port ', PORT);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));
app.use(function (request, response, next) {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	response.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
console.log("Registering Submodules ");
logger.registerListeners(app);
//tweetCollector.registerListeners(app);

app.get('/log-tail', function (req, res) {
	logger.log("Return overview of all logs ", moduleName, logger.DEBUG);

	handleLogs(req, res);
});


app.get('/artists/like/:artistName', function (req, res) {
	var artistName = req.params['artistName'].replace(/_/g, ' ');	// to retrieve value of query parameter called artist (?artist=someValue&otherParam=X)
	logger.log("Register like for proposal for " + artistName, moduleName, logger.INFO);

	handleLikeForArtist(req, res, artistName);
});

app.get('/about', function (req, res) {
	logger.log("About requested ", moduleName, logger.DEBUG);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write("About " + moduleName + ", Version " + settings.APP_VERSION);
	res.write("Supported URLs:");
	res.write("/artists/like/:artistName");
	res.write("/artists/likes");
	res.write("/log-tail");
	res.write("NodeJS runtime version " + process.version);
	res.write("incoming headers" + JSON.stringify(req.headers));
	res.end();
});
app.get('/', function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(moduleName + " (" + appVersion + ") - No Data Requested, so none is returned");
	res.write("Try /about");
	res.end();
});





function handleLikeForArtist(req, res, artistName) {
	likesProcessor.addLike(artistName);
	console.log("like for " + artistName);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ "like": artistName, "status": "Like added" }));

}//handleLikeForArtist


function handleLikes(req, res) {
	var likesDocumentKey = "artist-likes";
	cacheAPI.getFromCache(likesDocumentKey, function (response) {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(response.value));
	});//getFromCache

}//handleLikes

function handleLogs(req, res) {
	var logDocumentKey = "log-tail";
	cacheAPI.getFromCache(logDocumentKey, function (response) {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(response.value));
	});//getFromCache

}//handleLogs

