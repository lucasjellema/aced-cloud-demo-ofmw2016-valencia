package nl.amis.logger;

import java.util.logging.Logger;


import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import nl.amis.world.rest.rss.Feed;
import nl.amis.world.rest.rss.RSSFeedParser;

import oracle.adf.share.logging.ADFLogger;


// http://141.144.34.222/WebLogicLoggerService/resources/application.wadl
@Path("logger")
@Consumes("application/json")
public class LoggerService {
    private static ADFLogger _logger = ADFLogger.createADFLogger(LoggerService.class);

    static String _lastModule;


    public LoggerService() {
    }

    @GET
    @Path("log")
    @Produces("text/plain")
    public String get() {
        _logger.info("Invoked REST LoggerService API");

        return "REST API Logger Service is active.";
    }



    @POST
    @Produces("text/plain")
    @Path("log") //  host:port/WebLogicLoggerService/logger/log
    public String log(LogMessage message) {
        if (_logger == null ||  _lastModule==null ||!(_lastModule.equalsIgnoreCase(message.getModule()))) {
            // create new logger
            _lastModule = message.getModule();
            _logger = ADFLogger.createADFLogger(_lastModule);
        }
        logMessage(message);
        return "ok -processed a single message ."+message.getMessage();
    }

    @POST
    @Produces("text/plain")
    @Path("bulklog") //  host:port/WebLogicLoggerService/logger/log
    public String bulklog(LogMessageBundle bundle) {
        // Provide method implementation.
        // TODO
        int msgCount =0;
        System.out.println("log bundle of messages for module " + bundle.getModule());
        if (_logger == null || !(_lastModule.equalsIgnoreCase(bundle.getModule()))) {
            // create new logger
            _lastModule = bundle.getModule();
            _logger = ADFLogger.createADFLogger(_lastModule);
        }
        for (LogMessage msg : bundle.getMessages()) {
            msgCount++;
            logMessage(msg);

        } // loop over all messages in bundle
        return "ok - processed "+msgCount+" messages in the bundle.";
    }

    private void logMessage(LogMessage msg) {
        switch (msg.getLogLevel()==null?"info":msg.getLogLevel().toLowerCase()) {
        case "error":
            _logger.severe(msg.getMessage());
            break;
        case "warn":
            _logger.warning(msg.getMessage());
            break;
        case "info":
            _logger.info(msg.getMessage());
            break;
        case "debug":
            _logger.fine(msg.getMessage());
            break;
        case "finest":
            _logger.finest(msg.getMessage());
            break;
        default:
            _logger.info(msg.getMessage());
        }
    }

}
