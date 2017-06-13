var http = require('http'),
  request = require('request'),
  express = require('express'),
  bodyParser = require('body-parser');


var icsDropoffProxy = require("./ics-iotdropoff.js");

var APP_VERSION = "0.1.3"
var APP_NAME = "TweetCollector"

var moduleName = "TweetCollector";
var tweetCollector = module.exports;
var hashtag = "#paasaces";

console.log("Running " + APP_NAME + "version " + APP_VERSION);

var maxTweets = 100;
var tweets = []; // collection of maxTweets most recent tweets



tweetCollector.registerListeners =
  function (app) {

    app.get('/tweetping', function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write("Reply from " + APP_NAME);
      res.write("incoming headers" + JSON.stringify(req.headers));
      res.end();
    });

    /* Tweet:
     { "text":"Fake 2 #oraclecode Tweet @StringSection" 
                 , "author" : "lucasjellema"
                 , "authorImageUrl" : "http://pbs.twimg.com/profile_images/427673149144977408/7JoCiz-5_normal.png"
                 , "createdTime" : "April 17, 2017 at 01:39PM"
                 , "tweetURL" : "http://twitter.com/SaibotAirport/status/853935915714138112"
                 , "firstLinkFromTweet" : "https://t.co/cBZNgqKk0U"
                 }
    */

    app.post('/tweet', function (req, res) {
      console.log('Tweet Receiver TWEET POST');
      // now process text in req.body
      var tweetText = req.body;
      // correct json errors (remove \n and \r characters (ascii 13 and 10))
      tweetText = tweetText.replace(/\n/g, "");
      tweetText = tweetText.replace(/\r/g, "");
      // then create parse JSON into variable
      var tweet = JSON.parse(tweetText);
      postNewTweet(req, res, tweet);
      res.end();
    });//post messages

    app.get('/tweets', function (req, res) {
      var responseBody = { "tweets": tweets };
      // Send the response
      res.setHeader('Content-Type', 'application/json');
      res.send(responseBody);
    });//get tweets


    function postNewTweet(req, res, tweet) {

      console.log("received tweet " + JSON.stringify(tweet));
      tweets.reverse();
      tweets.push(tweet);
      // most recent ones at the top
      tweets.reverse();
      // retain no more than maxLogs entries
      tweets = tweets.slice(0, maxTweets);
    }// postNewTweet
  }


var refreshInterval = 30; //seconds

initHeartbeat = function (interval) {
  setInterval(function () {
    dropoffTweets(tweets);
  }
    , interval ? interval * 1000 : refreshInterval
  ); // setInterval 
}//initHeartbeat


initHeartbeat(refreshInterval)

// from https://stackoverflow.com/questions/25693456/get-hashtags-from-string-with-trim-spaces-and-new-lines
function findHashtags(searchText) {
  var regexp = /(\s|^)\#\w\w+\b/gm
  result = searchText.match(regexp);
  if (result) {
    result = result.map(function (s) { return s.trim(); });
    console.log(result);
    return result;
  } else {
    return false;
  }
}

function dropoffTweets(tweets) {
  // handle tweets
  console.log("handle tweets");
  // go through tweets
  // in each tweet, try to identify the  hashtag that is not #paasaces - because that will contain the artist
  var artistCounts = {};
  for (index = 0; index < tweets.length; ++index) {
    var artist = "";
    var tweet = tweets[index].text;
    var tags = findHashtags(tweet);
    var i = tags.indexOf(hashtag);
    if (i > -1) {
      if (i == 0 && tags.length > 1) {
        artist = tags[1].substring(1);
      }
      if (i == 1) {
        artist = tags[0].substring(1);
      }
      if (!artistCounts[artist]) {
        artistCounts[artist] = 1;
      } else {
        artistCounts[artist] = artistCounts[artist] + 1;
      }
    }//if
    console.log("artist = " + artist);
  }//for
  console.log("artistCounts " + JSON.stringify(artistCounts));

}