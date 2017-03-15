package nl.amis.world.rest.rss;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("rss")
@Produces("text/plain")
public class country {
    public country() {
    }

    @GET
    public String getData() {

        // Provide method implementation.
        // TODO
        return "Big String with lots of countries";

    }
}
