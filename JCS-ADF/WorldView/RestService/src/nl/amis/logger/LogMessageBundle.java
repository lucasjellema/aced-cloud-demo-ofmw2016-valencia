package nl.amis.logger;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement

public class LogMessageBundle {
    String module;
    private String logLevel;

    public void setLogLevel(String logLevel) {
        this.logLevel = logLevel;
    }

    public String getLogLevel() {
        return logLevel;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public String getModule() {
        return module;
    }

    @XmlElement 
     List<LogMessage> messages = new ArrayList<LogMessage>();

    public void setMessages(List<LogMessage> messages) {
        this.messages = messages;
    }

    public List<LogMessage> getMessages() {
        return messages;
    }

}
