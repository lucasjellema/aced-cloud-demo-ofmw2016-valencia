package nl.amis.world.view;

import java.io.IOException;
import java.io.PrintWriter;

import java.util.Random;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet(name = "WorldlyTalk", urlPatterns = { "/worldlytalk" })
public class WorldlyTalk extends HttpServlet {
    private static final String CONTENT_TYPE = "text/html; charset=UTF-8";

    public void init(ServletConfig config) throws ServletException {
        super.init(config);
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType(CONTENT_TYPE);
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<head><title>WorldlyTalk</title></head>");
            out.println("<body>");
            out.println("<script>"+
        "window.apmeum || (apmeum = {});"+
        "apmeum.customerId='nlamistrial73269';"+
        "apmeum.baseCollectorUrl='https://nlamistrial73269.itom2.management.us2.oraclecloud.com/APMaaSCollector/external/collector?';"+
        "</script>"+
        "<script async src='https://nlamistrial73269.itom2.management.us2.oraclecloud.com/APMaaSCollector/external/collector/staticlib/apmeum.js'></script> ");
        out.println("<p>So much to see and do. Get around, meet people, enjoy life</p>");
        Random rand = new Random();
        // n in 1..5
        int  n = rand.nextInt(5) + 1;
        if (n==1) {
            request.getServletContext().log("Too bad - 20% chance of choking and this is it. Sleeping for 3 seconds.");
            try {
                Thread.sleep(3000);
                out.println("<p>Oops, sorry about that little delay</p>");
            } catch (InterruptedException e) {
            }
        }
        if (n==5) {
            request.getServletContext().log("Too bad - 20% chance of misfiring. And you hit it!");
            throw new RuntimeException("Random Exception from Jittery Servlet");
        }
        out.println("<a href=\"moreworldlytalk\">More Worldly Talk (can be dangerous)</a>");
        out.println("<a href=\"nonexistingservletmoreworldlytalk\">Ephemeral Thoughts (can be hard to get hold of)</a>");
        out.println("<a href=\"superindex.html\">The Application's Main Index</a>");
        out.println("</body></html>");
        out.close();
        request.getServletContext().log("Logging from Servlet WorldlyTalk. Quite urgent. Not.");
    }
}
