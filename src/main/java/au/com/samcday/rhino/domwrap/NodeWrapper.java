package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.*;

public class NodeWrapper<T extends Node> extends Wrapper<T> implements Node {
    @Override
    @InstanceGetter
    public native String getNodeName();

    @Override
    @InstanceSetter
    public native String getNodeValue() throws DOMException;

    @Override
    @InstanceSetter
    public native void setNodeValue(String nodeValue) throws DOMException;

    @Override
    @InstanceGetter
    public native short getNodeType();

    @Override
    @InstanceGetter
    public native Node getParentNode();

    @Override
    @InstanceGetter
    public native NodeList getChildNodes();

    @Override
    @InstanceGetter
    public native Node getFirstChild();

    @Override
    @InstanceGetter
    public native Node getLastChild();

    @Override
    @InstanceGetter
    public native Node getPreviousSibling();

    @Override
    @InstanceGetter
    public native Node getNextSibling();

    @Override
    @InstanceGetter
    public native NamedNodeMap getAttributes();

    @Override
    @InstanceGetter
    public native Document getOwnerDocument();

    @Override
    public native Node insertBefore(Node newChild, Node refChild) throws DOMException;

    @JSFunction
    @WrappedJSFunction
    public native Node insertBefore(NodeWrapper newChild, NodeWrapper refChild);

    @Override
    public native Node replaceChild(Node newChild, Node oldChild) throws DOMException;

    @JSFunction
    @WrappedJSFunction
    public native Node replaceChild(NodeWrapper newChild, NodeWrapper oldChild);

    @Override
    public native Node removeChild(Node oldChild) throws DOMException;

    @JSFunction
    @WrappedJSFunction
    public native Node removeChild(NodeWrapper oldChild);

    @Override
    public native Node appendChild(Node newChild) throws DOMException;

    @JSFunction
    @WrappedJSFunction
    public native Node appendChild(NodeWrapper newChild);

    @Override
    @JSFunction
    public native boolean hasChildNodes();

    @Override
    @JSFunction
    public native Node cloneNode(boolean deep);

    @Override
    @JSFunction
    public native void normalize();

    @Override
    @JSFunction
    public native boolean isSupported(String feature, String version);

    @Override
    @InstanceGetter
    public native String getNamespaceURI();

    @Override
    @InstanceGetter
    public native String getPrefix();

    @Override
    @InstanceSetter
    public native void setPrefix(String prefix) throws DOMException;

    @Override
    @InstanceGetter
    public native String getLocalName();

    @Override
    @JSFunction
    public native boolean hasAttributes();

    @Override
    @InstanceGetter
    public native String getBaseURI();

    @Override
    public native short compareDocumentPosition(Node other) throws DOMException;

    @JSFunction
    @WrappedJSFunction
    public native short compareDocumentPosition(NodeWrapper other);

    @Override
    @InstanceGetter
    public native String getTextContent() throws DOMException;

    @Override
    @InstanceSetter
    public native void setTextContent(String textContent) throws DOMException;

    @Override
    public native boolean isSameNode(Node other);

    @JSFunction
    @WrappedJSFunction
    public native boolean isSameNode(NodeWrapper other);

    @Override
    @JSFunction
    public native String lookupPrefix(String namespaceURI);

    @Override
    @JSFunction
    public native boolean isDefaultNamespace(String namespaceURI);

    @Override
    @JSFunction
    public native String lookupNamespaceURI(String prefix);

    @Override
    public native boolean isEqualNode(Node arg);

    @JSFunction
    @WrappedJSFunction
    public native boolean isEqualNode(NodeWrapper arg);

    @Override
    public native Object getFeature(String feature, String version);

    @Override
    public native Object setUserData(String key, Object data, UserDataHandler handler);

    @Override
    public native Object getUserData(String key);
}