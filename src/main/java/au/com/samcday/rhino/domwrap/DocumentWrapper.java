package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.*;

public class DocumentWrapper<T extends Document> extends NodeWrapper<T> implements Document {
    @Override
    @InstanceGetter
    public native DocumentType getDoctype();

    @Override
    @InstanceGetter
    public native DOMImplementation getImplementation();

    @Override
    @InstanceGetter
    public native Element getDocumentElement();

    @Override
    @JSFunction
    public native Element createElement(String tagName) throws DOMException;

    @Override
    @JSFunction
    public native DocumentFragment createDocumentFragment();

    @Override
    @JSFunction
    public native Text createTextNode(String data);

    @Override
    @JSFunction
    public native Comment createComment(String data);

    @Override
    @JSFunction
    public native CDATASectionWrapper createCDATASection(String data) throws DOMException;

    @Override
    @JSFunction
    public native ProcessingInstruction createProcessingInstruction(String target, String data) throws DOMException;

    @Override
    @JSFunction
    public native Attr createAttribute(String name) throws DOMException;

    @Override
    @JSFunction
    public native EntityReference createEntityReference(String name) throws DOMException;

    @Override
    @JSFunction
    public native NodeList getElementsByTagName(String tagname);

    @Override
    public native Node importNode(Node importedNode, boolean deep) throws DOMException;

    @JSFunction
    @WrappedJSFunction
    public native Node importNode(NodeWrapper importedNode, boolean deep) throws DOMException;

    @Override
    @JSFunction
    public native Element createElementNS(String namespaceURI, String qualifiedName) throws DOMException;

    @Override
    @JSFunction
    public native Attr createAttributeNS(String namespaceURI, String qualifiedName) throws DOMException;

    @Override
    @JSFunction
    public native NodeList getElementsByTagNameNS(String namespaceURI, String localName);

    @Override
    @JSFunction
    public native Element getElementById(String elementId);

    @Override
    @InstanceGetter
    public native String getInputEncoding();

    @Override
    @InstanceGetter
    public native String getXmlEncoding();

    @Override
    @InstanceGetter
    public native boolean getXmlStandalone();

    @Override
    @InstanceSetter
    public native void setXmlStandalone(boolean xmlStandalone) throws DOMException;

    @Override
    @InstanceGetter
    public native String getXmlVersion();

    @Override
    @InstanceSetter
    public native void setXmlVersion(String xmlVersion) throws DOMException;

    @Override
    @InstanceGetter
    public native boolean getStrictErrorChecking();

    @Override
    @InstanceSetter
    public native void setStrictErrorChecking(boolean strictErrorChecking);

    @Override
    @InstanceGetter
    public native String getDocumentURI();

    @Override
    @InstanceSetter
    public native void setDocumentURI(String documentURI);

    @Override
    public native Node adoptNode(Node source) throws DOMException;

    @JSFunction
    @WrappedJSFunction
    public native Node adoptNode(NodeWrapper source);

    @Override
    @InstanceGetter
    public native DOMConfiguration getDomConfig();

    @Override
    @JSFunction
    public native void normalizeDocument();

    @Override
    public native Node renameNode(Node n, String namespaceURI, String qualifiedName) throws DOMException;
}
