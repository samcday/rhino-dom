package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.w3c.dom.DOMException;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public abstract class Wrapper<T> extends ScriptableObject {
    protected T wrapped;
    protected Class wrappedClass;
    protected Class wrapperClass;

    /**
     * Helper method to wrap the provided instance in a Wrapper class, if needed. The proxy implementations pass stuff
     * to this helper without doing any type checking, and this will just return the instance as-is if it's not actually
     * something that needs to be wrapped.
     * @param obj
     * @return
     */
    public static Object wrap(Object obj, Scriptable scope) {
        if(obj instanceof NodeList) {
            return DomWrap.newWrap((NodeList)obj, scope);
        }
        else if(obj instanceof Node) {
            return DomWrap.newWrap((Node)obj, scope);
        }
        return obj;
    }

    public static Object invokeWrapped(Method method, Object instance, Scriptable scope, Object... args) throws Throwable {
        try {
            return DomWrap.doWrap(method.invoke(instance, args), scope, method.getReturnType());
        }
        catch(InvocationTargetException ite) {
            if(ite.getTargetException() instanceof DOMException) {
                throw DOMExceptionWrapper.create(scope, (DOMException)ite.getTargetException());
            }
            throw ite.getTargetException();
        }
    }

    public void init(Class wrapperClass) {
        this.wrapperClass = wrapperClass;
        this.wrappedClass = DomWrap.WRAPPER_TYPES.get(this.wrapperClass);
    }

    public void setWrapped(Object obj) {
        this.wrapped = (T)obj;
    }

    public T getWrappedObject() {
        return this.wrapped;
    }

    @Override
    public String getClassName() {
        return this.getWrappedClass().getSimpleName();
    }

    private Class getWrappedClass() {
        if(this.wrappedClass == null) {
            return DomWrap.WRAPPER_TYPES.get(this.getClass());
        }
        return this.wrappedClass;
    }

    @Override
    // WrapperGetterProxy makes sure toString() dispatches here from JS runtime.
    public String toString() {
        return "[object " + this.getClassName() + "]";
    }
}
