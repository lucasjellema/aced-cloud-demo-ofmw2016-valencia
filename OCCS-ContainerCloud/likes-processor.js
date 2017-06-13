var logger = require("./logger.js");
var settings = require("./proxy-settings.js");
var cacheAPI = require("./cache-api.js");

var likeProcessor = module.exports;
var moduleName = "occs.likeProcessor";

var refreshInterval = 3; //seconds

// the like processor will check the EventHub every refreshInterval seconds for all likes for artists
// it will aggregate all likes per artist and store the result as the updated artist-likes document in the cache


var likesDocumentKey = "artist-likes";
likeProcessor.likes = [];

initHeartbeat = function (interval) {
    setInterval(function () {
        checkLikes(likeProcessor.likes);
    }
        , interval ? interval * 1000 : refreshInterval
    ); // setInterval 
}//initHeartbeat


initHeartbeat(refreshInterval)
console.log("Like Processor (version " + settings.APP_VERSION + ") initialized with refreshInterval of " + refreshInterval + " seconds.");

likeProcessor.addLike = function (like) {
    likeProcessor.likes.push(like);
    logger.log("Received like for "+like, moduleName, logger.DEBUG);

}

function checkLikes(likes) {
    var likesDoc;
    if (likes && likes.length > 0) {
        cacheAPI.getFromCache(likesDocumentKey, function (response) {
            try {
                //              console.log("from cache " + JSON.stringify(response));
                if (response.statusCode == '404') {
                    likesDoc = likesDoc = {
                        "offset": 0
                        , "timestamp": Date.now()
                        , "artist_likes": {}
                    }
                }
                else {
                    likesDoc = JSON.parse(response).value
                    console.log(likesDoc);
                };
                likesDoc.timestamp = Date.now();
                if (likes) {
                    // process the results from likes array into the likesDoc
                    // get all messages of type Like
                    // loop through them and aggregate
                    processLikes(likesDoc, likes);
                    console.log("LIKES REAL: %%%%%%%%%%%%%%%%%%%" + JSON.stringify(likesDoc));
//                     likesDoc= {
//                 "offset": 0
//                 , "timestamp": null
//                 , "artist_likes": {      "u2": 4,
//       "bob dylan": 5,
//       "Bruce Springsteen": 93,
//       "Manowar": 33,
//       "ABBA": 16,
//       "Amon Amarth": 4,
//       "Metallica": 3
// }
//             };
                    cacheAPI.putInCache(likesDocumentKey, likesDoc, function (response) {
                        console.log("put likesdoc in cache " + response);
                        // clear all likes
                        likes.length = 0;
                    })
                }//if
        }
            catch (e) {
            console.log("Exception in checkLikes" + e);
            console.log("Exception in checkLikes" + JSON.stringify(e));
        }
    });//getFromCache
}// likes
}//checkLikes

function processLikes(likesDoc, likes) {
    var offset = likesDoc.offset ? likesDoc.offset : 0;
    for (index = 0; index < likes.length; ++index) {
        artist = likes[index];
        var curValue = likesDoc.artist_likes[artist];
        likesDoc.artist_likes[artist] = curValue ? curValue + 1 : 1;
    }//for
    // set new offset
}