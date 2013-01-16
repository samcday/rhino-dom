package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.FunctionObject;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.w3c.dom.*;

import java.lang.reflect.InvocationTargetException;

public class DomWrap {
    public static void init(ScriptableObject scope) throws IllegalAccessException, InstantiationException, InvocationTargetException{
        ScriptableObject.defineClass(scope, NodeListWrapper.class);
        ScriptableObject.defineClass(scope, NamedNodeMapWrapper.class);
        ScriptableObject.defineClass(scope, NodeWrapper.class);
        ScriptableObject.defineClass(scope, AttrWrapper.class, false, true);
        ScriptableObject.defineClass(scope, ElementWrapper.class, false, true);
        ScriptableObject.defineClass(scope, DocumentWrapper.class, false, true);
        ScriptableObject.defineClass(scope, CharacterDataWrapper.class, false, true);
        ScriptableObject.defineClass(scope, TextWrapper.class, false, true);
    }

    /**
     * Wraps a provided Node with the most relevant Wrap* class. e.g if a Element is provided it will be wrapped using
     * ElementWrapper, Comment would be wrapped with WrappedComment, etc.
     * @param node
     * @param scope
     * @return
     */
    public static <T extends NodeWrapper> T wrap(Node node, Scriptable scope) {
        FunctionObject constructor = null;
        if(node instanceof Document) {
            constructor = (FunctionObject)scope.get("Document", scope);
        }
        else if(node instanceof Text) {
            constructor = (FunctionObject)scope.get("Text", scope);
        }
        else if(node instanceof Attr) {
            constructor = (FunctionObject)scope.get("Attr", scope);
        }
        else if(node instanceof Element) {
            constructor = (FunctionObject)scope.get("Element", scope);

        }

        if(constructor != null) {
            return (T)constructor.construct(Context.getCurrentContext(), scope, new Object[] { node });
        }

        return null;
    }

    public static NodeList wrap(NodeList nodeList, Scriptable scope) {
        FunctionObject constructor = (FunctionObject)scope.get("NodeList", scope);
        return (NodeList)constructor.construct(Context.getCurrentContext(), scope, new Object[] { nodeList });
    }

    public static NamedNodeMap wrap(NamedNodeMap nodeList, Scriptable scope) {
        FunctionObject constructor = (FunctionObject)scope.get("NamedNodeMap", scope);
        return (NamedNodeMap)constructor.construct(Context.getCurrentContext(), scope, new Object[] { nodeList });
    }


    public static <T extends Node> T unwrap(Node node) {
        if(node instanceof NodeWrapper) {
            return (T)((NodeWrapper)node).getNode();
        }
        return (T)node;
    }
}
