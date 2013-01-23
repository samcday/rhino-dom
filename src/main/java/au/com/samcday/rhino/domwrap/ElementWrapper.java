package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.*;

public class ElementWrapper<T extends Element> extends NodeWrapper<T> implements Element {
    @Override
    @InstanceGetter
    public native String getTagName();

    @Override
    @JSFunction
    public native String getAttribute(String name);

    @Override
    @JSFunction
    public native void setAttribute(String name, String value) throws DOMException;

    @Override
    @JSFunction
    public native void removeAttribute(String name) throws DOMException;

    @Override
    @JSFunction
    public native Attr getAttributeNode(String name);

    @Override
    public native Attr setAttributeNode(Attr newAttr) throws DOMException;

    @WrappedJSFunction
    @JSFunction
    public native Attr setAttributeNode(AttrWrapper newAttr);

    @Override
    public native Attr removeAttributeNode(Attr oldAttr) throws DOMException;

    @WrappedJSFunction
    @JSFunction
    public native Attr removeAttributeNode(AttrWrapper oldAttr);

    @Override
    @JSFunction
    public native NodeList getElementsByTagName(String name);

    @Override
    @JSFunction
    public native String getAttributeNS(String namespaceURI, String localName) throws DOMException;

    @Override
    @JSFunction
    public native void setAttributeNS(String namespaceURI, String qualifiedName, String value) throws DOMException;

    @Override
    @JSFunction
    public native void removeAttributeNS(String namespaceURI, String localName) throws DOMException;

    @Override
    @JSFunction
    public native Attr getAttributeNodeNS(String namespaceURI, String localName) throws DOMException;

    @Override
    public native Attr setAttributeNodeNS(Attr newAttr) throws DOMException;

    @Override
    @JSFunction
    public native NodeList getElementsByTagNameNS(String namespaceURI, String localName) throws DOMException;

    @Override
    @JSFunction
    public native boolean hasAttribute(String name);

    @Override
    @JSFunction
    public native boolean hasAttributeNS(String namespaceURI, String localName) throws DOMException;

    @Override
    public native TypeInfo getSchemaTypeInfo();

    @Override
    public native void setIdAttribute(String name, boolean isId) throws DOMException;

    @Override
    public native void setIdAttributeNS(String namespaceURI, String localName, boolean isId) throws DOMException;

    @Override
    public native void setIdAttributeNode(Attr idAttr, boolean isId) throws DOMException;
}
