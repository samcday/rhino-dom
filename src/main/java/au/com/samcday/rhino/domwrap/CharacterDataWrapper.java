package au.com.samcday.rhino.domwrap;

import au.com.samcday.rhino.domwrap.InstanceGetter;
import au.com.samcday.rhino.domwrap.InstanceSetter;
import au.com.samcday.rhino.domwrap.NodeWrapper;
import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.CharacterData;
import org.w3c.dom.DOMException;

public class CharacterDataWrapper<T extends CharacterData> extends NodeWrapper<T> implements CharacterData {
    @Override
    @InstanceGetter
    public native String getData() throws DOMException;

    @Override
    @InstanceSetter
    public native void setData(String data) throws DOMException;

    @Override
    @InstanceGetter
    public native int getLength();

    @Override
    @JSFunction
    public native String substringData(int offset, int count) throws DOMException;

    @Override
    @JSFunction
    public native void appendData(String arg) throws DOMException;

    @Override
    @JSFunction
    public native void insertData(int offset, String arg) throws DOMException;

    @Override
    @JSFunction
    public native void deleteData(int offset, int count) throws DOMException;

    @Override
    @JSFunction
    public native void replaceData(int offset, int count, String arg) throws DOMException;
}
