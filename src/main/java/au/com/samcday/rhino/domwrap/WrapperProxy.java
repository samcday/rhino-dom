package au.com.samcday.rhino.domwrap;

import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

public class WrapperProxy implements MethodInterceptor {
    @Override
    public Object intercept(Object thiz, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        if((method.getModifiers() & Modifier.NATIVE) > 0) {
            if(method.isAnnotationPresent(WrappedJSFunction.class)) {
                // Unwrap args.
            }
            return this.dispatchToWrapped(thiz, method, args);
        }

        return methodProxy.invokeSuper(thiz, args);
    }

    private Object dispatchToWrapped(Object inst, Method method, Object[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        Wrapper wrapper = (Wrapper)inst;
        Object wrapped = wrapper.getWrappedObject();
        Method underlyingMethod = wrapped.getClass().getMethod(method.getName(), method.getParameterTypes());
        return /*Wrapper.wrap(*/underlyingMethod.invoke(wrapped, args)/*, wrapper.getParentScope())*/;
    }
}
