/*
example call:  http://127.0.0.1:5100/artists/get?artist=u2

*/

console.log("NodeJS runtime version " + process.version);
var settings = require("./proxy-settings.js");

console.log('Application version ' + settings.APP_VERSION);


var http = require('http'),
	request = require('request'),
	util = require('util'),
	express = require('express'),
	bodyParser = require('body-parser'), // npm install body-parser
	async = require('async')

	;

var logger = require("./logger.js");
var cacheAPI = require("./cache-api.js");
var icsProxy = require("./ics-proxy.js");
//var eventhubAPI = require("./eventhub-api.js");
//var eventBridge = require("./eventbridge-api.js");
//var tweetBoard = require("./tweet-board-ms.js");
//var mailerAPI = require("./mailer.js");
var emailerAPI = require("./emailer.js");
//var likesProcessor = require("./likes-processor.js");
//var logProcessor = require("./log-processor.js");
var moduleName = "accs.ArtistEnricher-API";


//var PORT = 5100;
var PORT = process.env.PORT || settings.PORT;

var appVersion = "0.9.5";



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
cacheAPI.registerListeners(app);
icsProxy.registerListeners(app);
//eventhubAPI.registerListeners(app);
//eventBridge.registerListeners(app);
//tweetBoard.registerListeners(app);
//mailerAPI.registerListeners(app);
emailerAPI.registerListeners(app);

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/artists/like/:artistName', function (req, res) {
	var artistName = req.params['artistName'].replace(/_/g, ' ');	// to retrieve value of query parameter called artist (?artist=someValue&otherParam=X)
	logger.log("Register like for proposal for " + artistName, moduleName, logger.INFO);

	handleLikeForArtist(req, res, artistName);
});


app.get('/artists/likes', function (req, res) {
	logger.log("Return overview of all likes ", moduleName, logger.DEBUG);

	handleLikes(req, res);
});

app.get('/log-tail', function (req, res) {
	logger.log("Return overview of all logs ", moduleName, logger.DEBUG);

	handleLogs(req, res);
});


app.get('/artists/:artistName', function (req, res) {
	var artistName = req.query['artist'];	// to retrieve value of query parameter called artist (?artist=someValue&otherParam=X)
	logger.log("Retrieved enriched data for " + artistName, moduleName, logger.INFO);

	handleArtists(req, res, artistName);
});

app.get('/about', function (req, res) {
	logger.log("About requested ", moduleName, logger.DEBUG);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write("About Artist Enricher API, Version " + settings.APP_VERSION);
	res.write("Supported URLs:");
	res.write("/cache-api/about , /artists/get?artist=:artistName");
	res.write("/artists/like/:artistName");
	res.write("/artists/likes");
	res.write("/log-tail");
	res.write("/mailer");
	res.write("/eventBridge");
	res.write("NodeJS runtime version " + process.version);
	res.write("incoming headers" + JSON.stringify(req.headers));
	res.end();
});
app.get('/', function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write("Artist Enricher API (" + appVersion + ") - No Data Requested, so none is returned");
	res.write("Try /about");
	res.end();
});





function composeArtisResponse(res, artist) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(artist));
}//composeArtisResponse

function composeErrorResponse(res, err) {
	logger.log("Error in composing artist response: " + JSON.stringify(err), moduleName, logger.ERROR);
	res.statusCode = 500;
	res.send('An internal error occurred: ' + JSON.stringify(err));
}//composeErrorResponse

function handleLikeForArtist(req, res, artistName) {
	var msg = { "records": [{ "key": "like", "value": artistName }] };
	console.log("msg " + JSON.stringify(msg));
	eventhubAPI.postMessagesToEventHub(msg
		, function (response) {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({ "like": msg.records[0], "status": "Like added", "response": response }));
		});

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
					var route_options = {
						"method": "GET"
						, "headers": {
							"Authorization": "Bearer " + token
						}
					};


function handleArtists(req, res, artistName) {
	var artist = {}; // artist record that will be constructed bit by bit
	async.parallel([
		// first function: call out to Spotify
		function (callback) {
			util.log('Start Spotify Call');
			// execute sequential asynchronous calls to functions as waterfall
			async.waterfall([
				function (callback) {
					var artistUrl = spotifyAPI + '/search?q=' + encodeURI(artistName) + '&type=artist'; // use encodeURI to handle special characters in the name in the proper way
					// add header
					// Authorization:
					// Bearer TOKEN
					route_options.uri = artistUrl;

					// invoke Spotify Search API to find the Artist and the spotify identifier; the response brings in genres and an image url 
					request(route_options, function handleSpotifySearchResponse(error, response, body) {
						if (error) {
							console.log("error in processing " + JSON.stringify(error));
							logger.log("Error in processing artist enrichment: " + JSON.stringify(err), moduleName, logger.ERROR);
							callback(error, artist.spotifyId);
						}

						if (!error && response.statusCode == 200) {
							var artistsResponse = JSON.parse(body);
							// if the artist has not been found, return immediately	  
							if (artistsResponse.artists.total == 0) {
								callback(null, 'not found');
							}// if artist not found	  
							// else continue processing with spotify response
							artist.spotifyId = artistsResponse.artists.items[0].id;
							artist.name = artistsResponse.artists.items[0].name;
							artist.genres = JSON.stringify(artistsResponse.artists.items[0].genres);
							if (artistsResponse.artists.items[0].images.length > 0) {
								artist.imageURL = artistsResponse.artists.items[0].images[0].url;
							}
							artist.spottiyHRef = artistsResponse.artists.items[0].href;
							callback(null, artist.spotifyId);
						}//!error in spotify search
					});// request
				}, // go collect list of albums by this artist
				function (artistSpotifyId, callback) {
					/* now get discography - the most recent 50 albums (the maximum we can collect in one call)
							 https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2/albums?limit=50&album_type=album	  
					 */
					var albumsURL = spotifyAPI + '/artists/' + artistSpotifyId + '/albums' + '?limit=50&album_type=album';
					artist.albums = [];
					route_options.uri = albumsURL;
					request(route_options, function (error, response, body) {
						var albumsResponse = JSON.parse(body);
						for (var i = 0; i < albumsResponse.items.length; i++) {
							var album = {};
							album.title = albumsResponse.items[i].name;
							if (albumsResponse.items[i].images.length > 0) {
								album.imageURL = albumsResponse.items[i].images[0].url;
							}
							album.spotifyId = albumsResponse.items[i].id;
							artist.albums.push(album);
						};// for loop over albums
						callback(null, artist.albums);
					});//request     },
				},  // go get details on the albums in the list artist.albums
				function (albums, callback) {
					var albumsDetailsURL = spotifyAPI + '/albums/?ids=';
					var albumArrays = [];
					var i, j, chunk = 15;
					// create albumArrays with no more than 15 album ids in each of them
					for (i = 0, j = albums.length; i < j; i += chunk) {
						albumArrays.push(albums.slice(i, i + chunk));
					}
					// parallel execution of each of the album arrays - note: we can invoke the albumDetailsURL with a maximum number of album id values per call
					async.forEachOf(albumArrays, function (value, key, callback) {
						var albumsDetailsURL = spotifyAPI + '/albums/?ids=';
						// concatenate album id's together
						for (var i = 0; i < value.length; i++) {
							albumsDetailsURL += (i > 0 ? ',' : '') + value[i].spotifyId;
						}//for 
						// invoke REST API to retrieve details for a set of albums
											route_options.uri = albumsDetailsURL;
					request(route_options, function (error, response, body) {
							var albumDetailsResponse = JSON.parse(body);
							for (var i = 0; i < albumDetailsResponse.albums.length; i++) {
								// clumsy way to correct for incomplete release dates (year only for example)
								albums[(i + key * chunk)].releaseDate =
									(albumDetailsResponse.albums[i].release_date_precision == 'day'
										? albumDetailsResponse.albums[i].release_date
										: albumDetailsResponse.albums[i].release_date + '-01-01'
									);
							}// for
							// return the fact that this albumArray is done - up to forEachOf
							callback();
						}); //request
					}, function (err) { // completion of the forEachOf
						// after the asynch.forEachOf, when all branches have done their callback()
						// done with all parallel processing; notify the top level (waterfall) that we are done here
						callback(err, albums);
					}
					);// forEachOf						  
				}
			], function (err, result) {// completion of waterfall
				// result now equals 'done'
				util.log('waterfall done');
				util.log('Finished Two Sequential Spotify Calls');
				callback(err, 'waterfall');
			}
			);//waterfall	
		}
		,
		// second function: call out to cache to get biography
		function (callback) {
			var biographyCacheKey = "biography-" + encodeURI(artistName).toLowerCase();
			/*
				try {
					cacheAPI.getFromCache(biographyCacheKey, function (response) {
						try {
							if (response.statusCode == '404') {
								// biography not found in cache; now what?
								console.log("bio not found in cache for " + encodeURI(artistName));
								artist.biography = '(not yet available for ' + encodeURI(artistName) + ')';
							}
							else {
								// assuming a biography document structured like this: {"biography": "content of biography"}
								console.log("bio found in cache, adding to artist document " + response.value.biography);

								artist.biography = response.value.biography;
							}
							callback(null, "Biography from cache");
						}
						catch (e) {
							console.log("Exception in get biography from cache" + e);
							console.log("Exception in checkLikes" + JSON.stringify(e));
							callback(null, "No biography found yet")
						}
					});// cache request
				}
				catch (e) {
					console.log("Exception in get biography from cache" + e);
					callback(null, "No biography found yet")
				}*/
				callback(null, "No biography found yet")
			}
	]
		, function (err, results) {
			console.log("Done parallel!");
			if (err) {
				logger.log("Error in processing artist enrichment: " + JSON.stringify(err), moduleName, logger.ERROR);
				console.log("error in processing " + JSON.stringify(err));
				composeErrorResponse(res, err);
			}
			else {
				console.log("done with processing " + JSON.stringify(results));
				// take the artist record as it stands right now and compose the response
				composeArtisResponse(res, artist);
			}
		});//parallel

} //handleArtists


