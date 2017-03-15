package nl.amis.world.view;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet(name = "MoreWorldlyTalk", urlPatterns = { "/moreworldlytalk" })
public class MoreWorldlyTalk extends HttpServlet {
    private static final String CONTENT_TYPE = "text/html; charset=UTF-8";

    public void init(ServletConfig config) throws ServletException {
        super.init(config);
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType(CONTENT_TYPE);
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<head><title>MoreWorldlyTalk</title></head>");
        out.println("<body>");
        out.println("<script>" + "window.apmeum || (apmeum = {});" + "apmeum.customerId='nlamistrial73269';" +
                    "apmeum.baseCollectorUrl='https://nlamistrial73269.itom2.management.us2.oraclecloud.com/APMaaSCollector/external/collector?';" +
                    "</script>" +
                    "<script async src='https://nlamistrial73269.itom2.management.us2.oraclecloud.com/APMaaSCollector/external/collector/staticlib/apmeum.js'></script> ");

        int value = 0 / 0;
        out.println("<p>The servlet has received a GET. This is the reply.</p>" + value + ".</p>");
        if (1 > 0) {
            request.getServletContext().log("Logging from Servlet MoreWorldlyTalk. About to throw an exception. Quite naughty.");

            throw new ServletException("This Servlet Throws an Exception.");
        }
        out.println("</body></html>");
        out.close();
    }
}
