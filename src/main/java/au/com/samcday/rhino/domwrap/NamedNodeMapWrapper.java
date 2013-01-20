package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.DOMException;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;

public class NamedNodeMapWrapper extends Wrapper<NamedNodeMap> implements NamedNodeMap {
    @Override
    @JSFunction
    public native Node getNamedItem(String name);

    @Override
    public native Node setNamedItem(Node arg) throws DOMException;

    @JSFunction
    @WrappedJSFunction
    public native Node setNamedItem(NodeWrapper arg);

    @Override
    @JSFunction
    public native Node removeNamedItem(String name) throws DOMException;

    @Override
    @JSFunction
    public native Node item(int index);

    @Override
    @InstanceGetter
    public native int getLength();

    @Override
    @JSFunction
    public native Node getNamedItemNS(String namespaceURI, String localName) throws DOMException;

    @Override
    public native Node setNamedItemNS(Node arg) throws DOMException;

    @JSFunction
    @WrappedJSFunction
    public native Node setNamedItemNS(NodeWrapper arg);

    @Override
    @JSFunction
    public native Node removeNamedItemNS(String namespaceURI, String localName) throws DOMException;
}
