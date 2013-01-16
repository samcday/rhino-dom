package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.annotations.JSConstructor;
import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.DOMException;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;

public class NamedNodeMapWrapper extends ScriptableObject implements NamedNodeMap {
    private NamedNodeMap namedNodeMap;

    @SuppressWarnings("unused") public NamedNodeMapWrapper() {}
    public NamedNodeMapWrapper(NamedNodeMap list) {
        this.namedNodeMap = list;
    }

    @JSConstructor
    public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj, boolean inNewExpr) {
        if(args.length != 1 || !(args[0] instanceof NamedNodeMap)) {
            throw Context.reportRuntimeError("Illegal constructor");
        }
        NamedNodeMap namedNodeMap = (NamedNodeMap)args[0];
        return new NamedNodeMapWrapper(namedNodeMap);
    }

    @Override
    @JSFunction
    public Node getNamedItem(String name) {
        return DomWrap.wrap(this.namedNodeMap.getNamedItem(name), this.getParentScope());
    }

    @Override
//    @JSFunction
    public Node setNamedItem(Node arg) throws DOMException {
        return DomWrap.wrap(this.namedNodeMap.setNamedItem(DomWrap.unwrap(arg)), this.getParentScope());
    }

    @Override
    public Node removeNamedItem(String name) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node item(int index) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public int getLength() {
        return 0;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node getNamedItemNS(String namespaceURI, String localName) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node setNamedItemNS(Node arg) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node removeNamedItemNS(String namespaceURI, String localName) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getClassName() {
        return "NamedNodeMap";
    }

    @Override
    public String toString() {
        return "[object NamedNodeMap]";
    }
}
