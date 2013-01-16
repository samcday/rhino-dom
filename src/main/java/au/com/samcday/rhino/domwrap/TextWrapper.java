package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.annotations.JSConstructor;
import org.w3c.dom.*;

/**
 * Created with IntelliJ IDEA.
 * User: sam
 * Date: 16/01/13
 * Time: 3:35 PM
 * To change this template use File | Settings | File Templates.
 */
public class TextWrapper extends CharacterDataWrapper implements Text {
    private Text characterData;

    public TextWrapper() { }
    public TextWrapper(Text text) {
        super(text);
        this.characterData = text;
    }

    @JSConstructor
    public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj, boolean inNewExpr) {
        if(args.length != 1 || !(args[0] instanceof Text)) {
            throw Context.reportRuntimeError("Illegal constructor");
        }
        Text text = (Text)args[0];
        return new TextWrapper(text);
    }

    @Override
    public Text splitText(int offset) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean isElementContentWhitespace() {
        return false;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getWholeText() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Text replaceWholeText(String content) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getClassName() {
        return "Text";
    }
}
