package au.com.samcday.rhino.domwrap.debug;

import net.sf.cglib.proxy.*;
import org.mozilla.javascript.*;
import org.mozilla.javascript.annotations.JSConstructor;
import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.Element;

import java.lang.reflect.Method;

public class ProxyTest {

    public static void main(String... args) throws Exception {
        Context cx = Context.enter();
        ScriptableObject scope = cx.initStandardObjects();

        ScriptableObject.defineClass(scope, ToBeProxied.class, false, true);

        Object proto = ScriptableObject.getClassPrototype(scope, "ToBeProxied");
        Object cons = ScriptableObject.getProperty(scope, "ToBeProxied");

        Method meth = Ermagawd.class.getMethod("jsConstructor", Context.class, Object[].class, Function.class, boolean.class);
        FunctionObject fun = new FunctionObject("ToBeProxied", meth, scope);
        fun.addAsConstructor(scope, ScriptableObject.getClassPrototype(scope, "ToBeProxied"));

        System.out.println(cx.evaluateString(scope, "new ToBeProxied().parentFunc()", "<test>", 1, null));
    }

    public static class Ermagawd extends ScriptableObject {
//        public static HashMap<Class, Class> PROXIED_CLASSES = new HashMap<Class, Class>();

        @JSConstructor
        public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj, boolean inNewExpr) throws InstantiationException, IllegalAccessException {
            System.out.println("other construct()");
            Class clazz = ctorObj.get("prototype", ctorObj).getClass();
//            Class proxiedClazz = PROXIED_CLASSES.get(clazz);

//            Scriptable inst = (Scriptable)proxiedClazz.newInstance();
            return (Scriptable)Enhancer.create(clazz, null, new CallbackFilter() {
                @Override
                public int accept(Method method) {
                    if(method.getAnnotation(JSFunction.class) != null) {
                        return 1;
                    }
                    return 0;
                }
            }, new Callback[] { NoOp.INSTANCE, new MethodInterceptor() {
                @Override
                public Object intercept(Object thiz, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
                    return "INTERCEPT " + method.getName() + " BOI!";
                }
            } });
//            return (Scriptable).newInstance();
//            return new ToBeProxied();
        }

        @Override
        public String getClassName() {
            return "WTF";
        }
    }

    public static class ProxiedParent extends ScriptableObject {
        @Override
        public String getClassName() {
            return "ProxiedParent";
        }

        @JSFunction
        public String parentFunc() {
            return "I'm a parent.";
        }
    }

    public static class ToBeProxied extends ProxiedParent {
//        @JSConstructor
        public ToBeProxied() {
            System.out.println("ctor.");
        }

        @JSConstructor
        public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj, boolean inNewExpr) {
            System.out.println("construct()");
            return new ToBeProxied();
        }

        @JSFunction("balls")
        public native String test();

        @JSFunction
        public native String zzz(Element n);

        @JSFunction("hello")
        public String hello() {
            return "Hello";
        }

        @Override
        public String getClassName() {
            return "ToBeProxied";
        }

        @Override
        public String toString() {
            return "LAWL";
        }
    }
}
