var http = require('http'),
  request = require('request'),
  express = require('express'),
  bodyParser = require('body-parser');

var APP_VERSION = "0.1.3"
var APP_NAME = "TweetCollector"

var moduleName = "TweetCollector";
var tweetCollector = module.exports;


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