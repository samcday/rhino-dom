package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.annotations.JSConstructor;
import org.mozilla.javascript.annotations.JSFunction;
import org.mozilla.javascript.annotations.JSGetter;
import org.w3c.dom.*;

public class WrappedElement extends NodeWrapper implements Element {
    private Element element;

    public WrappedElement() {}
    public WrappedElement(Element element) {
        super(element);
        this.element = element;
    }

    @JSConstructor
    public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj, boolean inNewExpr) {
        if(args.length != 1 || !(args[0] instanceof Element)) {
            throw Context.reportRuntimeError("Illegal constructor");
        }
        Element element = (Element)args[0];
        return new WrappedElement(element);
    }

    @Override
    public String getClassName() {
        return "Element";
    }

    @Override
    @JSGetter
    public String getTagName() {
        return this.element.getTagName();
    }

    @Override
    @JSFunction
    public String getAttribute(String name) {
        return this.element.getAttribute(name);
    }

    @Override
    @JSFunction
    public void setAttribute(String name, String value) throws DOMException {
        this.element.setAttribute(name, value);
    }

    @Override
    @JSFunction
    public void removeAttribute(String name) throws DOMException {
        this.element.removeAttribute(name);
    }

    @Override
    public Attr getAttributeNode(String name) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Attr setAttributeNode(Attr newAttr) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Attr removeAttributeNode(Attr oldAttr) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public NodeList getElementsByTagName(String name) {
        return this.hintedWrap(NodeList.class, this.element.getElementsByTagName(name));
    }

    @Override
    public String getAttributeNS(String namespaceURI, String localName) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setAttributeNS(String namespaceURI, String qualifiedName, String value) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void removeAttributeNS(String namespaceURI, String localName) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Attr getAttributeNodeNS(String namespaceURI, String localName) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Attr setAttributeNodeNS(Attr newAttr) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public NodeList getElementsByTagNameNS(String namespaceURI, String localName) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean hasAttribute(String name) {
        return false;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean hasAttributeNS(String namespaceURI, String localName) throws DOMException {
        return false;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public TypeInfo getSchemaTypeInfo() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setIdAttribute(String name, boolean isId) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setIdAttributeNS(String namespaceURI, String localName, boolean isId) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setIdAttributeNode(Attr idAttr, boolean isId) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String toString() {
        return "[object Element]";
    }
}
