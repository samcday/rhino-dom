package au.com.samcday.rhino.domwrap;

import net.sf.cglib.proxy.Callback;
import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.NoOp;
import org.mozilla.javascript.*;

import java.lang.reflect.Method;

public class WrapperConstructor extends ScriptableObject {
    public static final String TL_CONSTRUCTOR_GUARD = "DOMWRAP_CONSTRUCT";

    public static Scriptable construct(Context cx, Object[] args, Function ctorObj, boolean inNewExp) throws InstantiationException, IllegalAccessException {
        if(cx.getThreadLocal(TL_CONSTRUCTOR_GUARD) == null) {
            throw Context.reportRuntimeError("Illegal construction.");
        }
        Class clazz = ctorObj.get("prototype", ctorObj).getClass();
        Wrapper inst = (Wrapper)Enhancer.create(clazz, null, WrapperCallbackFilter.INSTANCE, new Callback[] { NoOp.INSTANCE, new WrapperProxy(), WrapperGetterProxy.get(clazz) });
        inst.init(clazz);
        return inst;
    }

    public static FunctionObject create(Scriptable scope, String name, Class clazz) {
        try {
            Method meth = WrapperConstructor.class.getMethod("construct", Context.class, Object[].class, Function.class,
                    boolean.class);
            FunctionObject fun = new FunctionObject(name, meth, scope);
            fun.addAsConstructor(scope, ScriptableObject.getClassPrototype(scope, name));
            return fun;
        }
        catch(NoSuchMethodException nsme) {
            throw new IllegalStateException(nsme);
        }
    }

    @Override
    public String getClassName() {
        return "";
    }
}
