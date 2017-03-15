package soaring.clouds.adf;

import oracle.adf.share.logging.ADFLogger;

public class LoggerBean {
    private static ADFLogger _logger = ADFLogger.createADFLogger(LoggerBean.class);

private String someValue;

    public void setSomeValue(String someValue) {
        this.someValue = someValue;
    }

    public String getSomeValue() {
        _logger.info("Retrieved some value - probably from ProposalManager.jsf");
        return someValue;
    }

    public LoggerBean() {
        super();
        _logger.fine("Constructed Main Bean");
    }
 
 
}
