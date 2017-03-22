package nl.amis.logger;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LogMessage {
    
    private String logLevel;
    private String module;

    public void setLogLevel(String logLevel) {
        this.logLevel = logLevel;
    }

    public String getLogLevel() {
        return logLevel;
    }

    public void setModule(String module) {
        this.module = module;
    }

    @Override
    public String toString() {
        return module+" - "+logLevel+" : "+message ;
    }

    public String getModule() {
        return module;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
    private String message;
    
    
    public LogMessage() {
        super();
    }
    
    
}
