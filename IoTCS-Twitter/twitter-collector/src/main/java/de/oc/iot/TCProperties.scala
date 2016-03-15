package de.oc.iot

import java.io.FileInputStream
import java.util.Properties

case class TCProperties(path: String,
                         var oAuthConsumerKey: String = "",
                         var oAuthConsumerSecret: String = "",
                         var oAuthToken: String = "",
                         var oAuthTokenSecret: String = "",
                         var triggerHashtag: String = "",
                         var deviceEndpointId: String = "",
                         var deviceEndpointSecret: String = "",
                         var serverHost: String = "",
                         var serverPort: String = "",
                         var serverCn: String = "",
                         var keystoreFileName: String = "",
                         var keystoreFilePass: String = "") extends Properties {
  load(new FileInputStream(path))
  Option(getProperty("twitter.oauth.consumerkey")) foreach (oAuthConsumerKey = _)
  Option(getProperty("twitter.oauth.consumersecret")) foreach (oAuthConsumerSecret = _)
  Option(getProperty("twitter.oauth.token")) foreach (oAuthToken = _)
  Option(getProperty("twitter.oauth.tokensecret")) foreach (oAuthTokenSecret = _)
  Option(getProperty("twitter.trigger.hashtag")) foreach (triggerHashtag = _)
  Option(getProperty("device.endpoint.id")) foreach (deviceEndpointId = _)
  Option(getProperty("device.endpoint.secret")) foreach (deviceEndpointSecret = _)
  Option(getProperty("server.host")) foreach (serverHost = _)
  Option(getProperty("server.port")) foreach (serverPort = _)
  Option(getProperty("server.cn")) foreach (serverCn = _)
  Option(getProperty("keystore.file.name")) foreach (keystoreFileName = _)
  Option(getProperty("keystore.file.pass")) foreach (keystoreFilePass = _)
}
