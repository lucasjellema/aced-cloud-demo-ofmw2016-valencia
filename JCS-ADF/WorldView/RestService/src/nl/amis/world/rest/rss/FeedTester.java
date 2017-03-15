package nl.amis.world.rest.rss;


public class FeedTester {
    public static void main(String[] args) {
        RSSFeedParser parser = new RSSFeedParser("http://feeds.reuters.com/Reuters/worldNews");
        Feed feed = parser.readFeed("reuters");
        System.out.println(feed);
        for (FeedMessage message : feed.getMessages()) {
            System.out.println(message);

        }

    }
}
