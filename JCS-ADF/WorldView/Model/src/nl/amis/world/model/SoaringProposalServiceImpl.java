package nl.amis.world.model;

import oracle.adf.share.logging.ADFLogger;

import oracle.jbo.Session;
import oracle.jbo.SessionData;
import oracle.jbo.server.ApplicationModuleImpl;
import oracle.jbo.server.ViewLinkImpl;
import oracle.jbo.server.ViewObjectImpl;
// ---------------------------------------------------------------------
// ---    File generated by Oracle ADF Business Components Design Time.
// ---    Sun Mar 05 11:12:24 CET 2017
// ---    Custom code may be added to this class.
// ---    Warning: Do not modify method signatures of generated methods.
// ---------------------------------------------------------------------
public class SoaringProposalServiceImpl extends ApplicationModuleImpl {

    private static ADFLogger _logger = 
                ADFLogger.createADFLogger(SoaringProposalServiceImpl.class); 
    /**
     * This is the default constructor (do not remove).
     */
    public SoaringProposalServiceImpl() {
        _logger.fine("Constructing Application Module");
    }


    @Override
    public void prepareSession(SessionData sessionData) {
        // TODO Implement this method
        super.prepareSession(sessionData);
        _logger.info("prepareSession prepares the database session and performs initialization; this is the place to set client_identitier, module and action through dbms_application_info");
    }

    @Override
    protected void prepareSession(Session session) {
        // TODO Implement this method
        super.prepareSession(session);
    }

    /**
     * Container's getter for AlbumsView1.
     * @return AlbumsView1
     */
    public ViewObjectImpl getAlbumsView1() {
        return (ViewObjectImpl) findViewObject("AlbumsView1");
    }

    /**
     * Container's getter for ProposedActsView1.
     * @return ProposedActsView1
     */
    public ViewObjectImpl getProposedActsView1() {
        return (ViewObjectImpl) findViewObject("ProposedActsView1");
    }

    /**
     * Container's getter for ProposedActsView2.
     * @return ProposedActsView2
     */
    public ViewObjectImpl getProposedActsView2() {
        return (ViewObjectImpl) findViewObject("ProposedActsView2");
    }

    /**
     * Container's getter for AlbumsView2.
     * @return AlbumsView2
     */
    public ViewObjectImpl getAlbumsView2() {
        return (ViewObjectImpl) findViewObject("AlbumsView2");
    }

    /**
     * Container's getter for ActAlbumViewLink.
     * @return ActAlbumViewLink
     */
    public ViewLinkImpl getActAlbumViewLink() {
        return (ViewLinkImpl) findViewLink("ActAlbumViewLink");
    }
}

