package nl.amis.world.view.beans.helper;
import com.sun.jersey.api.client.Client;

import com.sun.jersey.api.client.WebResource;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import nl.amis.world.view.beans.NewsRssBean;

import oracle.adf.share.logging.ADFLogger;

public class RssInvoker {


    String bbcFeed = "http://feeds.bbci.co.uk/news/rss.xml?edition=uk";
    String nosFeed = "http://feeds.nos.nl/nosnieuwsalgemeen";
    String abcFeed = "http://feeds.abcnews.com/abcnews/internationalheadlines";
    String cnnFeed = "http://rss.cnn.com/rss/cnn_topstories.rss";
    String reutersFeed = "http://feeds.reuters.com/Reuters/worldNews";
    private static ADFLogger _logger = 
                ADFLogger.createADFLogger(RssInvoker.class); 

    public RssInvoker() {
        super();
    }
    
    public ByteArrayInputStream getRss(String feedIdentifier) {
        _logger.warning("This method should not be invoked; this is dead code. This call is a mistake that should be corrected");
            try {
                Client c = Client.create();
                WebResource resource = c.resource(this.cnnFeed);
                String response = resource.accept("application/xml").get(String.class);
                return new ByteArrayInputStream(response.getBytes("UTF-8"));
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
    
}
