package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.Attr;
import org.w3c.dom.DOMException;
import org.w3c.dom.Element;
import org.w3c.dom.TypeInfo;

public class AttrWrapper extends NodeWrapper<Attr> implements Attr {
    @Override
    @InstanceGetter
    public native String getName();

    @Override
    @InstanceGetter
    public native boolean getSpecified();

    @Override
    @InstanceGetter
    public native String getValue();

    @Override
    @InstanceSetter
    public native void setValue(String value) throws DOMException;

    @Override
    @InstanceGetter
    public native Element getOwnerElement();

    @Override
    @InstanceGetter
    public native TypeInfo getSchemaTypeInfo();

    @Override
    @JSFunction
    public native boolean isId();
}
