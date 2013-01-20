package au.com.samcday.rhino.domwrap;

import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

public class WrapperProxy implements MethodInterceptor {
    @Override
    public Object intercept(Object thiz, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        if((method.getModifiers() & Modifier.NATIVE) > 0) {
            if(method.isAnnotationPresent(WrappedJSFunction.class)) {
                // Unwrap args.
                for(int i = 0; i < args.length; i++) {
                    if(args[i] instanceof Wrapper) {
                        args[i] = ((Wrapper)args[i]).wrapped;
                    }
                }

                // Find the method we actually want to dispatch to.
                // TODO: this code is very naive, it assumes that @WrappedJSFunction should dispatch to a method with
                // the same name on the wrapped instance, it does not do any parameter type checking.
                // ANOTHER TODO: we should probably be caching the expensive reflection lookups we're doing here.
                Class clazz = ((Wrapper)thiz).wrapped.getClass();
                for(Method search : clazz.getMethods()) {
                    if(search.getName().equals(method.getName())) {
                        method = search;
                        break;
                    }
                }
            }
            return this.dispatchToWrapped(thiz, method, args);
        }

        return methodProxy.invokeSuper(thiz, args);
    }

    private Object dispatchToWrapped(Object inst, Method method, Object[] args) throws Throwable {
        Wrapper wrapper = (Wrapper)inst;
        Object wrapped = wrapper.getWrappedObject();
        Method underlyingMethod = wrapped.getClass().getMethod(method.getName(), method.getParameterTypes());
        return Wrapper.invokeWrapped(underlyingMethod, wrapped, wrapper.getParentScope(), args);
    }
}
