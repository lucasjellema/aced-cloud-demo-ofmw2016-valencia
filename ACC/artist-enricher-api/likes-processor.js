var logger = require("./logger.js");
var settings = require("./proxy-settings.js");
var cacheAPI = require("./cache-api.js");
var eventhubAPI = require("./eventhub-api.js");

var likeProcessor = module.exports;
var moduleName = "accs.likeProcessor";

var refreshInterval = 3; //seconds

// the like processor will check the EventHub every 10 seconds for all likes for artists
// it will aggregate all likes per artist and store the result as the updated artist-likes document in the cache

var likesDocumentKey = "artist-likes";
var eventHubConsumerGroupName = "likesConsumer";

initHeartbeat = function (interval) {
    setInterval(function () {
        checkLikes();
    }
        , interval ? interval * 1000 : refreshInterval
    ); // setInterval 3000 is 3 secs
}//initHeartbeat


initHeartbeat(refreshInterval)
console.log("Like Processor (version " + settings.APP_VERSION + ") initialized with refreshInterval of " + refreshInterval + " seconds.");


function checkLikes() {
    // console.log('check likes');
    eventhubAPI.createConsumerGroup(eventHubConsumerGroupName, function (response) {
        //console.log("after create consumer group "+response);
        eventhubAPI.getMessagesFromConsumerGroup(eventHubConsumerGroupName, function (response) {
            //  console.log("Events: ");
            //console.log(response.body);
            var messages = JSON.parse(response.body);
            //console.log("LIKES: %%%%%%%%%%%%%%%%%%%"+JSON.stringify(likesDoc));
            if (settings.runLocally) {
                console.log("run locally, so  no cache interaction");
                var likesDoc;
                likesDoc = likesDoc = {
                    "offset": 0
                    , "timestamp": Date.now()
                    , "artist_likes": {}
                }
                if (messages) {
                    processLikes(likesDoc, messages);
                }

            } else {  // not locally

                cacheAPI.getFromCache(likesDocumentKey, function (response) {
                    try {
                        //              console.log("from cache " + JSON.stringify(response));
                        var likesDoc;
                        if (response.statusCode == '404') {
                            likesDoc = likesDoc = {
                                "offset": 0
                                , "timestamp": Date.now()
                                , "artist_likes": {}
                            }
                        }
                        else { likesDoc = response.value };


                        likesDoc.timestamp = Date.now();
                        if (messages) {

                            // process the results from EventHub into the likesDoc
                            // get all messages of type Like
                            // loop through them and aggregate
                            processLikes(likesDoc, messages);
                        }
                        console.log("LIKES REAL: %%%%%%%%%%%%%%%%%%%" + JSON.stringify(likesDoc));



                        cacheAPI.putInCache(likesDocumentKey, JSON.stringify(likesDoc), function (response) {
                            console.log("put likesdoc in cache " + response);


                        });//putInCache
                    }
                    catch (e) {
                        console.log("Exception in checkLikes" + e);
                        console.log("Exception in checkLikes" + JSON.stringify(e));
                    }
                });//getFromCache
            }//else
        }); // eventHubAPI get messages
    }); //eventhubAPI create consumer group


}//checkLikes

function processLikes(likesDoc, messages) {
    var offset = likesDoc.offset ? likesDoc.offset : 0;
    for (index = 0; index < messages.length; ++index) {
        //    console.log("index = "+index);
        //  console.log("msg  = "+messages[index]);

        msg = messages[index];
        // only process messages beyond the current offset
        if (msg.offset > offset && msg.key == 'like') {
            var curValue = likesDoc.artist_likes[msg.value];
            likesDoc.artist_likes[msg.value] = curValue ? curValue + 1 : 1;
        }//if
    }//for
    // set new offset
    if (messages && messages.length > 0) {
        likesDoc.offset = messages[messages.length - 1].offset;
    }
}