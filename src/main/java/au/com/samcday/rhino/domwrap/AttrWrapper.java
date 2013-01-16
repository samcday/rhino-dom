package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.annotations.JSConstructor;
import org.mozilla.javascript.annotations.JSGetter;
import org.w3c.dom.*;
import org.w3c.dom.Attr;

public class AttrWrapper extends NodeWrapper implements Attr {
    private Attr attr;

    public AttrWrapper() { }
    public AttrWrapper(Attr attr) {
        super(attr);
        this.attr = attr;
    }

    @JSConstructor
    public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj, boolean inNewExpr) {
        if(args.length != 1 || !(args[0] instanceof Attr)) {
            throw Context.reportRuntimeError("Illegal constructor");
        }
        Attr attr = (Attr)args[0];
        return new AttrWrapper(attr);
    }

    @Override
    @JSGetter
    public String getName() {
        return this.attr.getName();
    }

    @Override
    @JSGetter
    public boolean getSpecified() {
        return this.attr.getSpecified();
    }

    @Override
    @JSGetter
    public String getValue() {
        return this.attr.getValue();
    }

    @Override
    public void setValue(String value) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Element getOwnerElement() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public TypeInfo getSchemaTypeInfo() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean isId() {
        return false;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getClassName() {
        return "Attr";
    }
}
