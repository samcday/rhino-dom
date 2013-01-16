package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.annotations.JSConstructor;
import org.mozilla.javascript.annotations.JSFunction;
import org.mozilla.javascript.annotations.JSGetter;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class NodeListWrapper extends ScriptableObject implements NodeList {
    private NodeList nodeList;

    @SuppressWarnings("unused") public NodeListWrapper() {}
    public NodeListWrapper(NodeList list) {
        this.nodeList = list;
    }

    @JSConstructor
    public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj, boolean inNewExpr) {
        if(args.length != 1 || !(args[0] instanceof NodeList)) {
            throw Context.reportRuntimeError("Illegal constructor");
        }
        NodeList list = (NodeList)args[0];
        return new NodeListWrapper(list);
    }

    @Override
    @JSFunction
    public Node item(int index) {
//        Context cx = Context.getCurrentContext();
//        return cx.getWrapFactory().wrap(cx, this.getParentScope(), this.nodeList.item(index), Node.class);
//        return null;
        return DomWrap.wrap(this.nodeList.item(index), this.getParentScope());
    }

    @Override
    @JSGetter
    public int getLength() {
        return this.nodeList.getLength();
    }

    @Override
    public String getClassName() {
        return "NodeList";
    }

    @Override
    public Object get(int i, Scriptable scriptable) {
        return this.item(i);
    }

    @Override
    public String toString() {
        return "[object NodeList]";
    }
}
