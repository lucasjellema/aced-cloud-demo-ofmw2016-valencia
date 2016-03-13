Application Container Cloud is used for the REST Artist Enrichment Service that takes an artist name and returns a rich set of details about the artist. This service is implemented as a Node.js application. It leverages Spotify API and Echonest API.

This API is leveraged from SOA CS to enrich the submit new proposal; perhaps I will relocate this API to Oracle ACC.

The API is also exposed from the Google AppEngine, at http://104.155.85.98/artists.

Some sample calls: http://104.155.85.98/artists/get?artist=the+kaiser+chiefs (http://104.155.85.98/artists/get?artist=bon+jovi, http://104.155.85.98/artists/get?artist=the+beatles ...) 

