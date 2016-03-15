package de.oc.iot

import twitter4j._
import twitter4j.conf.ConfigurationBuilder

object TwitterCollector {
  val prop = TCProperties("config.properties")
  val iot = new IoTConnector
  val twitterStream = new TwitterStreamFactory(new ConfigurationBuilder
    setOAuthConsumerKey prop.oAuthConsumerKey
    setOAuthConsumerSecret prop.oAuthConsumerSecret
    setOAuthAccessToken prop.oAuthToken
    setOAuthAccessTokenSecret prop.oAuthTokenSecret build).getInstance
  def main(args: Array[String]) {
    iot.configure("config.properties")
    iot.connect()
    //iot.send("hello world")
    twitterStream addListener new StatusListener {
      override def onDeletionNotice(sdn: StatusDeletionNotice) = ()
      override def onException(e: Exception) = e.printStackTrace
      override def onScrubGeo(l1: Long, l2: Long) = ()
      override def onStallWarning(sw: StallWarning) = ()
      override def onStatus(s: Status) =
        s.getHashtagEntities.toList map (_.getText.toLowerCase) filter (_ != prop.triggerHashtag.toLowerCase) foreach (iot send _)
      override def onTrackLimitationNotice(i: Int) = ()
    }
    twitterStream filter (new FilterQuery track Array("#" + prop.triggerHashtag))
  }
}
