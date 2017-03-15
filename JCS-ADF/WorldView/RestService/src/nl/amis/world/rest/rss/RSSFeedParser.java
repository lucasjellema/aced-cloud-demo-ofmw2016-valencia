package nl.amis.world.rest.rss;

import java.io.IOException;
import java.io.InputStream;

import java.net.MalformedURLException;
import java.net.URL;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.Characters;
import javax.xml.stream.events.XMLEvent;

import oracle.adf.share.logging.ADFLogger;


@Path("world-rss")
public class RSSFeedParser {
    private static ADFLogger _logger = ADFLogger.createADFLogger(RSSFeedParser.class);
    static final String TITLE = "title";
    static final String DESCRIPTION = "description";
    static final String CHANNEL = "channel";
    static final String LANGUAGE = "language";
    static final String COPYRIGHT = "copyright";
    static final String LINK = "link";
    static final String AUTHOR = "author";
    static final String ITEM = "item";
    static final String PUB_DATE = "pubDate";
    static final String GUID = "guid";

    URL url;
    String urlString;

    String bbcFeed = "http://feeds.bbci.co.uk/news/rss.xml?edition=uk";
    String nosFeed = "http://feeds.nos.nl/nosnieuwsalgemeen";
    String abcFeed = "http://feeds.abcnews.com/abcnews/internationalheadlines";
    String cnnFeed = "http://rss.cnn.com/rss/cnn_topstories.rss";
    String reutersFeed = "http://feeds.reuters.com/Reuters/worldNews";

    public RSSFeedParser(String feedUrl) {
        try {
            this.urlString = feedUrl;
            this.url = new URL(feedUrl);

        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
    }

    public RSSFeedParser() {
        try {
            this.urlString = cnnFeed;
            this.url = new URL(urlString);

        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
    }

    @GET
    @Path("feed/{feedId}")
    @Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
    public Feed getFeed(@PathParam("feedId") String feedIdentifier) {
        _logger.info("REST Service /world-rss/feed/{0} - returning JSON representation of RSS news feed", feedIdentifier);

        return readFeed(feedIdentifier);
    }

    public Feed readFeed(String feedIdentifier) {
        if (feedIdentifier == null || feedIdentifier.length() == 0) {
            urlString = cnnFeed;
        } else {
            switch (feedIdentifier.toLowerCase()) {
            case "cnn":
                urlString = cnnFeed;
                break;
            case "bbc":
                urlString = bbcFeed;
                break;
            case "abc":
                urlString = abcFeed;
                break;
            case "nos":
                urlString = nosFeed;
                break;
            case "reuters":
                urlString = reutersFeed;
                break;
            default:
                urlString = cnnFeed;
                ;
                break;
            }
        } //if
        _logger.info("readFeed - start processing RSS Feed {0}", this.urlString);
        Feed feed = null;
        try {
            boolean isFeedHeader = true;
            // Set header values intial to the empty string
            String description = "";
            String title = "";
            String link = "";
            String language = "";
            String copyright = "";
            String author = "";
            String pubdate = "";
            String guid = "";

            // First create a new XMLInputFactory
            XMLInputFactory inputFactory = XMLInputFactory.newInstance();
            // Setup a new eventReader
            // use java.net.URL to fetch feed
            // this call is not seen by APM
            // We don't monitor generic HttpUrlConnection calls which is what java.net.URL would use.

            //On WebLogic, we monitor outbound calls using the built-in JAX-RS and JAX-WS implementations.

            //The only way to make this kind of call and have it be monitored by APM would be to rewrite the RSS fetching code to use the WLS built-in Jersey JAX-RS API rather than java.net.URL.


            InputStream in = read();

            XMLEventReader eventReader = inputFactory.createXMLEventReader(in);
            // read the XML document
            while (eventReader.hasNext()) {
                XMLEvent event = eventReader.nextEvent();
                if (event.isStartElement()) {
                    String localPart = event.asStartElement().getName().getLocalPart();
                    switch (localPart) {
                    case ITEM:
                        if (isFeedHeader) {
                            isFeedHeader = false;
                            feed = new Feed(title, link, description, language, copyright, pubdate);
                        }
                        event = eventReader.nextEvent();
                        break;
                    case TITLE:
                        title = getCharacterData(event, eventReader);
                        break;
                    case DESCRIPTION:
                        description = getCharacterData(event, eventReader);
                        break;
                    case LINK:
                        link = getCharacterData(event, eventReader);
                        break;
                    case GUID:
                        guid = getCharacterData(event, eventReader);
                        break;
                    case LANGUAGE:
                        language = getCharacterData(event, eventReader);
                        break;
                    case AUTHOR:
                        author = getCharacterData(event, eventReader);
                        break;
                    case PUB_DATE:
                        pubdate = getCharacterData(event, eventReader);
                        break;
                    case COPYRIGHT:
                        copyright = getCharacterData(event, eventReader);
                        break;
                    }
                } else if (event.isEndElement()) {
                    if (event.asEndElement().getName().getLocalPart() == (ITEM)) {
                        FeedMessage message = new FeedMessage();
                        message.setAuthor(author);
                        message.setDescription(description);
                        message.setGuid(guid);
                        message.setLink(link);
                        message.setTitle(title);
                        feed.getMessages().add(message);
                        event = eventReader.nextEvent();
                        continue;
                    }
                }
            }
        } catch (XMLStreamException e) {
            throw new RuntimeException(e);
        }
        if ("bbc".compareTo(feedIdentifier.toLowerCase()) == 0) {
            _logger.warning("Built in intentional delay of 4 seconds when fetching BBC feed. No particular reason, just to see whether you detectives would find it.");
            try {
                Thread.sleep(4000);
            } catch (InterruptedException e) {
            }
            _logger.fine("Done with silly sleep. Back to work.");
        }

        _logger.info("readFeed - return feed after fetching and parsing ");
        return feed;
    }

    private String getCharacterData(XMLEvent event, XMLEventReader eventReader) throws XMLStreamException {
        String result = "";
        event = eventReader.nextEvent();
        if (event instanceof Characters) {
            result = event.asCharacters().getData();
        }
        return result;
    }

/*
    private InputStream readRS() {
        try {
            Client c = Client.create();
            WebResource resource = c.resource(this.urlString);
            String response = resource.accept("application/xml").get(String.class);
            return new ByteArrayInputStream(response.getBytes("UTF-8"));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
*/
    private InputStream read() {
        try {
            try {
                url = new URL(this.urlString);
                return url.openStream();

            } catch (MalformedURLException e) {
                throw new RuntimeException(e);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }


}
