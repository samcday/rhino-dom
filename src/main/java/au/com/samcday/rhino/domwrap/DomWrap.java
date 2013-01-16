package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.ScriptableObject;

import java.lang.reflect.InvocationTargetException;

public class DomWrap {
    public static void init(ScriptableObject scope) throws IllegalAccessException, InstantiationException, InvocationTargetException{
        ScriptableObject.defineClass(scope, NodeWrapper.class);
        ScriptableObject.defineClass(scope, WrappedNodeList.class);
        ScriptableObject.defineClass(scope, DocumentWrapper.class, false, true);
        ScriptableObject.defineClass(scope, CharacterDataWrapper.class, false, true);
        ScriptableObject.defineClass(scope, TextWrapper.class, false, true);
    }
}
