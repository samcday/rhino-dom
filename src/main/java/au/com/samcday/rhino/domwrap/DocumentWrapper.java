package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.annotations.JSConstructor;
import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.*;

public class DocumentWrapper extends NodeWrapper implements Document {
    private Document document;

    public DocumentWrapper() { }
    public DocumentWrapper(Document doc) {
        super(doc);
        this.document = doc;
    }

    @JSConstructor
    public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj, boolean inNewExpr) {
        if(args.length != 1 || !(args[0] instanceof Document)) {
            throw Context.reportRuntimeError("Illegal constructor");
        }
        Document doc = (Document)args[0];
        return new DocumentWrapper(doc);
    }

    @Override
    public String getClassName() {
        return "Document";
    }

    @Override
    public DocumentType getDoctype() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public DOMImplementation getImplementation() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Element getDocumentElement() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Element createElement(String tagName) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public DocumentFragment createDocumentFragment() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    @JSFunction
    public Text createTextNode(String data) {
        return (Text)NodeWrapper.wrap(this.document.createTextNode(data), this.getParentScope());
    }

    @Override
    public Comment createComment(String data) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public CDATASection createCDATASection(String data) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public ProcessingInstruction createProcessingInstruction(String target, String data) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Attr createAttribute(String name) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public EntityReference createEntityReference(String name) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public NodeList getElementsByTagName(String tagname) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node importNode(Node importedNode, boolean deep) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Element createElementNS(String namespaceURI, String qualifiedName) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Attr createAttributeNS(String namespaceURI, String qualifiedName) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public NodeList getElementsByTagNameNS(String namespaceURI, String localName) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Element getElementById(String elementId) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getInputEncoding() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getXmlEncoding() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean getXmlStandalone() {
        return false;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setXmlStandalone(boolean xmlStandalone) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getXmlVersion() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setXmlVersion(String xmlVersion) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean getStrictErrorChecking() {
        return false;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setStrictErrorChecking(boolean strictErrorChecking) {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getDocumentURI() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setDocumentURI(String documentURI) {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node adoptNode(Node source) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public DOMConfiguration getDomConfig() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void normalizeDocument() {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node renameNode(Node n, String namespaceURI, String qualifiedName) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
}
