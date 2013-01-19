package au.com.samcday.rhino.domwrap;

import net.sf.cglib.proxy.CallbackFilter;
import org.mozilla.javascript.Scriptable;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Arrays;

public class WrapperCallbackFilter implements CallbackFilter {
    private static Object[] GETTER_SIGNATURE = new Object[] { String.class, Scriptable.class };
    public static WrapperCallbackFilter INSTANCE = new WrapperCallbackFilter();

    private WrapperCallbackFilter() { }

    @Override
    public int accept(Method method) {
        if(method.getName().equals("get") && Arrays.equals(method.getParameterTypes(), GETTER_SIGNATURE)) {
            return 2;
        }
        if(method.isAnnotationPresent(WrappedJSFunction.class) || (method.getModifiers() & Modifier.NATIVE) > 0) {
            return 1;
        }
        return 0;
    }
}
