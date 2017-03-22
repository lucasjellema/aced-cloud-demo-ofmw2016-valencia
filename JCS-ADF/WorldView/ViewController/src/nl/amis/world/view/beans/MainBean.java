package nl.amis.world.view.beans;

import oracle.adf.share.logging.ADFLogger;

public class MainBean {
    
    private String welcome = "Welcome Guest";
    private static ADFLogger _logger = 
                ADFLogger.createADFLogger(MainBean.class); 
    
    public MainBean() {
        super();
        System.out.println("New instance of MainBean created");
        _logger.info("Creating a new instance");
    }

    public void setWelcome(String welcome) {
        this.welcome = welcome;
    }

    public String getWelcome() {
        _logger.info("Request welcome");
        System.out.println("Get Welcome in MainBean");
        return welcome;
    }

   
}
