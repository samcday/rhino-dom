package au.com.samcday.rhino.domwrap;

import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;
import org.mozilla.javascript.FunctionObject;
import org.mozilla.javascript.Scriptable;

import java.lang.reflect.Method;
import java.util.HashMap;

public class WrapperGetterProxy implements MethodInterceptor {
    private static final HashMap<Class, WrapperGetterProxy> INSTANCES = new HashMap<Class, WrapperGetterProxy>();

    public static WrapperGetterProxy get(Class clazz) {
        if(INSTANCES.containsKey(clazz)) return INSTANCES.get(clazz);
        try {
            WrapperGetterProxy proxy = new WrapperGetterProxy(clazz);
            INSTANCES.put(clazz, proxy);
            return proxy;
        }
        catch(NoSuchMethodException nsme) {
            throw new RuntimeException("Failed to create getter proxy for wrapper class " + clazz.getSimpleName(), nsme);
        }
    }

    private final HashMap<String, Method> getterRegistry = new HashMap<String, Method>();

    private WrapperGetterProxy(Class clazz) throws NoSuchMethodException {
        Method[] methods = clazz.getMethods();
        Class delegeeClass = DomWrap.WRAPPER_TYPES.get(clazz);
        for(Method method : methods) {
            if(!method.isAnnotationPresent(InstanceGetter.class)) continue;
            String propertyName = method.getName().replace("get", "");
            propertyName = Character.toLowerCase(propertyName.charAt(0)) + propertyName.substring(1);
            getterRegistry.put(propertyName, delegeeClass.getMethod(method.getName()));
        }
    }

    @Override
    public Object intercept(Object thiz, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        String propertyName = (String)args[0];
        Scriptable scope = (Scriptable)args[1];

        if(propertyName == "toString") {
            return new FunctionObject("toString", Wrapper.class.getMethod("toString"), scope);
        }

        Method getter = this.getterRegistry.get(propertyName);
        if(getter == null) {
            return methodProxy.invokeSuper(thiz, args);
        }
        Object wrapped = ((Wrapper)thiz).getWrappedObject();
        return Wrapper.invokeWrapped(getter, wrapped, scope);
    }
}
