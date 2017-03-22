package nl.amis.world;
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


@Path("app")
public class IndexService {
    private static ADFLogger _logger = ADFLogger.createADFLogger(IndexService.class);

    public IndexService() {
        super();
    }
    
    @GET
    @Path("index/{userId}")
    @Produces({ MediaType.TEXT_HTML})
    public String getIndex(@PathParam("userId") String userId) {
        _logger.info("the app/index/ service is invoked with userId = "+userId);
        String body = "<html><head><title>World View Pre Index</title></head>"
            +"<body><p>This is not yet the real application Mr. or Mrs. "+userId+"</p>" 
            +"<a href=\"../../../index.html\">Click this link to enter the real index</a>"
            ;
        return body;
    }
}
