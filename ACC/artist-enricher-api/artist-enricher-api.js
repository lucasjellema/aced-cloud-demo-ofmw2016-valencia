

var https = require('https'),
    http = require('http'),
	url = require('url'),
	request = require('request')
	;
/* docs:
https://nodejs.org/api/https.html
https://nodejs.org/api/http.html

https://github.com/request/request

*/	
	
var express = require('express');
var app = express();

var PORT = process.env.PORT || 5100;


if (module === require.main) {
  // [START server]
  // Start the server
  var server = app.listen(PORT, function () {
    var host = server.address().address;

    console.log('App listening at http://%s:%s', host, PORT);
  });
  // [END server]
}

module.exports = app;


app.get('/', function (req, res) {
    console.log('request received: '+request.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Artist Enricher API - No Data Requested, so none is returned");
    res.end();
});

// Say hello!
app.get('/hello', function(req, res) {
  res.status(200).send('Hello, world!');
});
// [END hello_world]


// e.g. http://host:port/artists/get?artist=the+beatles, e.g. http://host:port/artists/get?artist=madonna
app.get('/artists/*', function(req,res){ handleArtists(req, res);} );


function handleArtists(req, res) {

  var spotifyAPI ='https://api.spotify.com/v1';
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  
  request(spotifyAPI + '/search?q='+encodeURI(query.artist)+'&type=artist', function (error, response, body) {  
    if (!error && response.statusCode == 200) {
      var artistsResponse = JSON.parse(body);
      var artist ={};
	  // if the artist has not been found, return immediately
	  
	  if (artistsResponse.artists.total==0) {
	    res.status(200).send(JSON.stringify(artist));
		return;
	  }
      artist.spotifyId = artistsResponse.artists.items[0].id;
      artist.name = artistsResponse.artists.items[0].name;
      artist.genres = JSON.stringify(artistsResponse.artists.items[0].genres);
	  if (artistsResponse.artists.items[0].images.length>0) {
        artist.imageURL = artistsResponse.artists.items[0].images[0].url;
      }
      artist.spottiyHRef = artistsResponse.artists.items[0].href;
      /* now get discography 
	  https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2/albums?limit=50&album_type=album
	  
	  */
	  var albumsURL = spotifyAPI + '/artists/'+artist.spotifyId+'/albums'+'?limit=50&album_type=album';
	  artist.albums=[];
      request(albumsURL, function (error, response, body) {  	  
         var albumsResponse = JSON.parse(body);
		 for (var i = 0; i < albumsResponse.items.length; i++) {
           var album = {};
		   album.title = albumsResponse.items[i].name;
		   if (albumsResponse.items[i].images.length > 0) {
		     album.imageURL = albumsResponse.items[i].images[0].url;
		   }
		   artist.albums.push(album);
         };// for loop over albums
		 /*  NOTE: I can use https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37
		           to retrieve details for 20 albums at a time - including release date and tracks.  (see https://developer.spotify.com/web-api/get-several-albums/) 
				   */
		 
		 var echoNestAPI = "http://developer.echonest.com/api/v4";
		 var echoNestDeveloperKey = "0B3N8LMO4XG3BXPSY";
		 var searchURL = echoNestAPI+ "/artist/search";
		 var biographiesURL = echoNestAPI+ "/artist/biographies";
         request(searchURL + '?api_key='+echoNestDeveloperKey+'&format=json&name='+encodeURI(query.artist)+'&results=1', function (error, response, body) {  
            if (!error && response.statusCode == 200) {
                var echonestSearchResponse = JSON.parse(body);
                var echonestArtistId = echonestSearchResponse.response.artists[0].id;
				artist.echonestArtistId = echonestArtistId;
				// with id under our belt, time to get the biography
				var bioURL = biographiesURL + '?api_key='+echoNestDeveloperKey+"&id="+echonestArtistId
				                                    +'&format=json&results=1&start=0&license=cc-by-sa';
         		request(bioURL
					  , function (error, response, body) {  
                          if (!error && response.statusCode == 200) {
                          var echonestBioSearchResponse = JSON.parse(body);
                          var bio = echonestBioSearchResponse.response.biographies[0].text;
    					  artist.biography = bio;
						  res.setHeader('Content-Type', 'application/json; charset=utf-8');
                          res.setHeader('Access-Control-Allow-Origin', '*');
						  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
						  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                          res.setHeader('Access-Control-Allow-Credentials', true);
                          res.statusCode =200;
                          res.send(JSON.stringify(artist));

						  }//if
						  else {
						  console.log('error '+error+" status "+response.statusCode );
						  }
						}
				);// request
		 
//		 /artist/biographies?api_key=0B3N8LMO4XG3BXPSY&id=ARH6W4X1187B99274F&format=json&results=1&start=0&license=cc-by-sa
		 /* retrieve biography 
		 API KEY = 0B3N8LMO4XG3BXPSY
		 
		 http://developer.echonest.com/docs/v4/artist.html#biographies
		 find artist:
		 
		 http://developer.echonest.com/api/v4/artist/search?api_key=0B3N8LMO4XG3BXPSY&format=json&name=radiohead&results=1
		 id = response.artists[0].id
		 
		 http://developer.echonest.com/api/v4/artist/biographies?api_key=0B3N8LMO4XG3BXPSY&id=ARH6W4X1187B99274F&format=json&results=1&start=0&license=cc-by-sa
		 
		 http://developer.echonest.com/api/v4/artist/biographies?api_key=0B3N8LMO4XG3BXPSY&id=AR6XZ861187FB4CECD&format=json&name=&results=1&start=0&license=cc-by-sa
		 bio  = response.biographies[0].text (note: attribute url refers to original publication
		 
		 find news about artist:
		 
		 http://developer.echonest.com/api/v4/artist/news?api_key=0B3N8LMO4XG3BXPSY&id=spotify:artist:5l8VQNuIg0turYE1VtM9zV&format=json
		 or
		 http://developer.echonest.com/api/v4/artist/news?api_key=0B3N8LMO4XG3BXPSY&id=AR6XZ861187FB4CECD&format=json
		 
		 */
		 
		 }}
		 );// request echonest search
      }); // handle response from albums
	}
})
} //handleArtists

