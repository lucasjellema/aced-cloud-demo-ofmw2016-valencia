package nl.amis.world.view.beans;

import com.sun.jersey.api.client.Client;

import java.util.ArrayList;
import java.util.List;

import generated.Feed;
import generated.FeedMessage;


import java.util.ResourceBundle;

import javax.faces.event.ActionEvent;
import javax.faces.event.ValueChangeEvent;

import nl.amis.world.view.beans.helper.RssInvoker;
import nl.amis.world.view.rssclient.TheWorldAtRestServiceResources;

import oracle.adf.share.logging.ADFLogger;

public class NewsRssBean {
    String rssFeedUrl;
    
    String rssFeedIdentifier;

    public void setRssFeedIdentifier(String rssFeedIdentifier) {
        this.rssFeedIdentifier = rssFeedIdentifier;
    }

    public String getRssFeedIdentifier() {
        return rssFeedIdentifier;
    }


    List<FeedMessage> rssItems;
    Feed feed;

    public void setFeed(Feed feed) {
        this.feed = feed;
    }

    public Feed getFeed() {
        return feed;
    }

    public void setRssFeedUrl(String rssFeedUrl) {
        this.rssFeedUrl = rssFeedUrl;
    }

    public String getRssFeedUrl() {
        return rssFeedUrl;
    }
    private static ADFLogger _logger = 
                ADFLogger.createADFLogger(NewsRssBean.class); 

    public void setRssItems(List<FeedMessage> rssItems) {
        this.rssItems = rssItems;
    }

    public List<FeedMessage> getRssItems() {
        // this may not be the most efficient way to getting hold of RSS Items - retrieving the RSS feed on every occasion!
        prepareRssItems();
        return rssItems;
    }
    
    private void prepareRssItems() {
        _logger.info("fetch rss feed from REST service {0}", getRssFeedIdentifier());
        // this is a meaningless call
        new RssInvoker().getRss(getRssFeedIdentifier());
        
        // and now for the real call - leveraging the generated JAX-RS client for the REST service that provides the JSON representation of the RSS feed
        Client client = TheWorldAtRestServiceResources.createClient();

        TheWorldAtRestServiceResources.WorldRss theworldatrestserviceresourcesworldRss =
            TheWorldAtRestServiceResources.worldRss(client);
        Feed rssFeed = theworldatrestserviceresourcesworldRss.feedFeedId(getRssFeedIdentifier()).getAsFeedJson();

        _logger.fine("retrieved rss feed for channel {0}", rssFeed.getTitle());
        rssItems = new ArrayList<FeedMessage>();
        rssItems = rssFeed.getEntries();
    }

    public NewsRssBean() {
        super();
    }

    public void changeNewsChannel(ValueChangeEvent valueChangeEvent) {
        // Add event code here...
        setRssFeedIdentifier((String) valueChangeEvent.getNewValue());
        _logger.info("News channel was switched to {0}", this.getRssFeedIdentifier() );
        prepareRssItems();
    }

    public void donotpressbuttonActionListener(ActionEvent actionEvent) {
        // Add event code here...
        _logger.warning("This button should not have been pressed.");
        throw new RuntimeException("The unpressable button was pressed");
    }
}
