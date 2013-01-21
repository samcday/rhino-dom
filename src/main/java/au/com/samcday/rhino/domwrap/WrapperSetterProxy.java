package au.com.samcday.rhino.domwrap;

import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;
import org.mozilla.javascript.Scriptable;

import java.lang.reflect.Method;
import java.util.HashMap;

public class WrapperSetterProxy implements MethodInterceptor {
    private static final HashMap<Class, WrapperSetterProxy> INSTANCES = new HashMap<Class, WrapperSetterProxy>();

    public static WrapperSetterProxy get(Class clazz) {
        if(INSTANCES.containsKey(clazz)) return INSTANCES.get(clazz);
        try {
            WrapperSetterProxy proxy = new WrapperSetterProxy(clazz);
            INSTANCES.put(clazz, proxy);
            return proxy;
        }
        catch(NoSuchMethodException nsme) {
            throw new RuntimeException("Failed to create setter proxy for wrapper class " + clazz.getSimpleName(), nsme);
        }
    }

    private final HashMap<String, Method> setterRegistry = new HashMap<String, Method>();

    private WrapperSetterProxy(Class clazz) throws NoSuchMethodException {
        Method[] methods = clazz.getMethods();
        Class delegeeClass = DomWrap.WRAPPER_TYPES.get(clazz);
        for(Method method : methods) {
            if(!method.isAnnotationPresent(InstanceSetter.class)) continue;
            String propertyName = method.getName().replace("set", "");
            propertyName = Character.toLowerCase(propertyName.charAt(0)) + propertyName.substring(1);
            setterRegistry.put(propertyName, delegeeClass.getMethod(method.getName(), method.getParameterTypes()));
        }
    }

    @Override
    public Object intercept(Object thiz, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        String propertyName = (String)args[0];
        Scriptable scope = (Scriptable)args[1];
        Object val = args[2];

        if(val instanceof Wrapper) {
            val = ((Wrapper)val).wrapped;
        }

        Method setter = this.setterRegistry.get(propertyName);
        if(setter == null) {
            return methodProxy.invoke(thiz, args);
        }
        Object wrapped = ((Wrapper)thiz).getWrappedObject();
        return Wrapper.invokeWrapped(setter, wrapped, scope, new Object[] { val });
    }
}
