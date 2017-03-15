package nl.amis.world.view.rssclient;

import com.sun.jersey.api.client.Client;

import generated.Feed;

import javax.annotation.Generated;

@Generated({ "Oracle JDeveloper", "run|c30b1bd4-85bc-4ed1-9959-7b00936d1dc1" })
public class TheWorldAtRestServiceResourcesClient {
    public static void main(String[] args) {
        Client client = TheWorldAtRestServiceResources.createClient();

        TheWorldAtRestServiceResources.WorldRss theworldatrestserviceresourcesworldRss =
            TheWorldAtRestServiceResources.worldRss(client);
        TheWorldAtRestServiceResources.Rss theworldatrestserviceresourcesrss =
            TheWorldAtRestServiceResources.rss(client);

        // add your code here
        Feed asFeedJson = theworldatrestserviceresourcesworldRss.feedFeedId("nos").getAsFeedJson();
System.out.println(asFeedJson.getTitle());

    }
}
