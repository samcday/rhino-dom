package au.com.samcday.rhino.domwrap;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import org.mozilla.javascript.*;
import org.w3c.dom.*;
import org.w3c.dom.Node;
import org.w3c.dom.html.HTMLElement;

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
        this.put(NodeListWrapper.class, NodeList.class);
        this.put(NamedNodeMapWrapper.class, NamedNodeMap.class);

        this.put(NodeWrapper.class, Node.class);

        this.put(CharacterDataWrapper.class, CharacterData.class);
        this.put(CommentWrapper.class, Comment.class);
        this.put(TextWrapper.class, Text.class);
        this.put(CDATASectionWrapper.class, CDATASection.class);

        this.put(ElementWrapper.class, Element.class);
        this.put(DocumentWrapper.class, Document.class);
        this.put(DocumentFragmentWrapper.class, DocumentFragment.class);
        this.put(AttrWrapper.class, Attr.class);

        this.put(EntityReferenceWrapper.class, EntityReference.class);
        this.put(DocumentTypeWrapper.class, DocumentType.class);

        this.put(HTMLElementWrapper.class, HTMLElement.class);
    }};

    public static void init(ScriptableObject scope) throws IllegalAccessException, InstantiationException, InvocationTargetException {
        for(Class clazz : WRAPPER_TYPES.keySet()) {
            createProtoAndConstructor(scope, clazz);
        }

        String exceptionClass = ScriptableObject.defineClass(scope, DOMExceptionWrapper.class, false, false);
        ScriptableObject.getClassPrototype(scope, exceptionClass).setPrototype(TopLevel.getBuiltinPrototype(scope, TopLevel.Builtins.Error));
    }

    private static void createProtoAndConstructor(ScriptableObject scope, Class clazz) throws IllegalAccessException, InstantiationException, InvocationTargetException {
        String name = ScriptableObject.defineClass(scope, clazz, false, true);
        Scriptable proto = ScriptableObject.getClassPrototype(scope, name);
        WrapperConstructor.create(scope, name, clazz);
    }

    public static Scriptable newWrap(Node node, Scriptable scope) {
        Class clazz = Node.class;
        if(node instanceof Element) {
            clazz = Element.class;
        }
        else if(node instanceof Document) {
            clazz = Document.class;
        }
        return (Scriptable)doWrap(node, scope, clazz);
    }

    public static Scriptable newWrap(NodeList nodeList, Scriptable scope) {
        return (Scriptable)doWrap(nodeList, scope, NodeList.class);
    }

    static Object doWrap(Object obj, Scriptable scope, Class typeHint) {
        if(obj == null) return null;
        if(typeHint != null && !WRAPPER_TYPES.containsValue(typeHint)) return obj;

        if(typeHint == Node.class) {
            if(obj instanceof Element) {
                typeHint = Element.class;
            }
            else if(obj instanceof Attr) {
                typeHint = Attr.class;
            }
            else if(obj instanceof CharacterData) {
                typeHint = CharacterData.class;
            }
            else if(obj instanceof DocumentFragment) {
                typeHint = DocumentFragment.class;
            }
            else if(obj instanceof EntityReference) {
                typeHint = EntityReference.class;
            }
            else if(obj instanceof DocumentType) {
                typeHint = DocumentType.class;
            }
        }

        if(typeHint == Element.class) {
            if(obj instanceof HTMLElement) {
                typeHint = HTMLElement.class;
            }
        }

        if(typeHint == CharacterData.class) {
            if(obj instanceof Text) {
                typeHint = Text.class;
            }
            else if(obj instanceof Comment) {
                typeHint = Comment.class;
            }
        }

        if(typeHint == Text.class) {
            if(obj instanceof CDATASection) {
                typeHint = CDATASection.class;
            }
        }

        String className = typeHint.getSimpleName();
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
