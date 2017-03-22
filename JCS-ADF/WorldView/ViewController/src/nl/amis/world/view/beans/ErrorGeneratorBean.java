package nl.amis.world.view.beans;

import java.util.ArrayList;

import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;

import oracle.adf.share.logging.ADFLogger;

public class ErrorGeneratorBean {
    
    String dummyString = "-";

    public void setDummyString(String dummyString) {
        this.dummyString = dummyString;
    }

    public String getDummyString() {
        return dummyString;
    }

    private static ADFLogger _logger = ADFLogger.createADFLogger(ErrorGeneratorBean.class);

    public ErrorGeneratorBean() {
        super();
    }

    String s = null;

    public void onSimulateNullPointerException(ActionEvent actionEvent) {

        _logger.info("now Simulating NullPointerException..");
        // *** Simulating NullPointerException ***
        String x = s.substring(9);
    }


    public void onSimulateIndexOutOfBoundsException(ActionEvent actionEvent) {
        // *** Simulating IndexOutOfBoundsException ***
        int[] A = new int[] { 2, 1, 1, 2, 3, 1 };
        ArrayList<Integer> foundNumbers = new ArrayList<>();
        for (int i = 0; i < A.length - 1; i++) {
            if (foundNumbers.get(i - 1) == null) {
                foundNumbers.set((i - 1), A[i]);
            }
        }
    }

    public void onSimulateNumberFormatException(ActionEvent actionEvent) {

        _logger.info("now Simulating NumberFormatException..");
        // *** Simulating NumberFormatException ***
        int i = Integer.parseInt(dummyString);
    }


}
