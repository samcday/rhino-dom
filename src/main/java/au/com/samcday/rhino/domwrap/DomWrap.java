package au.com.samcday.rhino.domwrap;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.FunctionObject;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.w3c.dom.*;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;

public class DomWrap {
    private static LoadingCache<String, Cache<Object, Scriptable>> cachedWrappers;

    static {
        cachedWrappers = CacheBuilder.newBuilder()
            .build(new CacheLoader<String, Cache<Object, Scriptable>>() {
                @Override
                public Cache<Object, Scriptable> load(String o) throws Exception {
                    return CacheBuilder.newBuilder()
                        .weakValues()
                        .build();
                }
            });
    }

    static final HashMap<Class<? extends Wrapper>, Class> WRAPPER_TYPES = new HashMap<Class<? extends Wrapper>, Class>() {{
        this.put(NodeWrapper.class, Node.class);
        this.put(ElementWrapper.class, Element.class);
        this.put(DocumentWrapper.class, Document.class);
        this.put(NodeListWrapper.class, NodeList.class);
    }};

    public static void init(ScriptableObject scope) throws IllegalAccessException, InstantiationException, InvocationTargetException {
        for(Class clazz : WRAPPER_TYPES.keySet()) {
            createProtoAndConstructor(scope, clazz);
        }
    }

    private static void createProtoAndConstructor(ScriptableObject scope, Class clazz) throws IllegalAccessException, InstantiationException, InvocationTargetException {
        String name = ScriptableObject.defineClass(scope, clazz, false, true);
        Scriptable proto = ScriptableObject.getClassPrototype(scope, name);
        WrapperConstructor.create(scope, name, clazz);
    }

    public static Scriptable newWrap(Node node, Scriptable scope) {
        String className = "Node";
        if(node instanceof Element) {
            className = "Element";
        }
        else if(node instanceof Document) {
            className = "Document";
        }
        return doWrap(node, className, scope);
    }

    public static Scriptable newWrap(NodeList nodeList, Scriptable scope) {
        return doWrap(nodeList, "NodeList", scope);
    }

    private static Scriptable doWrap(Object obj, String className, Scriptable scope) {
        Cache<Object, Scriptable> cache = cachedWrappers.getUnchecked(className);
        Scriptable wrapper = cache.getIfPresent(obj);
        if(wrapper != null) {
            return wrapper;
        }
        Context cx = Context.getCurrentContext();
        cx.putThreadLocal(WrapperConstructor.TL_CONSTRUCTOR_GUARD, true);
        wrapper = cx.newObject(scope, className);
        cx.putThreadLocal(WrapperConstructor.TL_CONSTRUCTOR_GUARD, null);
        ((Wrapper)wrapper).setWrapped(obj);
        cache.put(obj, wrapper);
        return wrapper;
    }

    /**
     * Wraps a provided Node with the most relevant Wrap* class. e.g if a Element is provided it will be wrapped using
     * ElementWrapper, Comment would be wrapped with WrappedComment, etc.
     * @param node
     * @param scope
     * @return
     */
    public static <T extends Node> T wrap(Node node, Scriptable scope) {
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
}
