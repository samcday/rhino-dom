package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.DOMException;
import org.w3c.dom.Text;

public class TextWrapper extends CharacterDataWrapper<Text> implements Text {
    @Override
    @JSFunction
    public native Text splitText(int offset) throws DOMException;

    @Override
    @JSFunction
    public native boolean isElementContentWhitespace();

    @Override
    @InstanceGetter
    public native String getWholeText();

    @Override
    @JSFunction
    public native Text replaceWholeText(String content) throws DOMException;
}
