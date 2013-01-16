package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.annotations.JSConstructor;
import org.w3c.dom.*;

public class CharacterDataWrapper extends NodeWrapper implements CharacterData {
    private CharacterData characterData;

    public CharacterDataWrapper() { }
    public CharacterDataWrapper(CharacterData doc) {
        super(doc);
        this.characterData = doc;
    }

    @JSConstructor
    public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj, boolean inNewExpr) {
        if(args.length != 1 || !(args[0] instanceof CharacterData)) {
            throw Context.reportRuntimeError("Illegal constructor");
        }
        CharacterData characterData = (CharacterData)args[0];
        return new CharacterDataWrapper(characterData);
    }

    @Override
    public String getData() throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setData(String data) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public int getLength() {
        return 0;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String substringData(int offset, int count) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void appendData(String arg) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void insertData(int offset, String arg) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void deleteData(int offset, int count) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void replaceData(int offset, int count, String arg) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getClassName() {
        return "CharacterData";
    }
}
