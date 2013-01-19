package au.com.samcday.rhino.domwrap.debug;

import net.sf.cglib.proxy.*;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.FunctionObject;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.annotations.JSFunction;

import java.lang.annotation.*;
import java.lang.reflect.Method;

public class Test {
    public static void main(String... args) throws Exception {
        Context cx = Context.enter();
        ScriptableObject scope =  cx.initStandardObjects();
        ScriptableObject.defineClass(scope, Parent.class);
        FunctionObject parentCons = (FunctionObject)scope.get("Parent", scope);
//        ScriptableObject.defineClass(scope, Child.class);

        Enhancer en = new Enhancer();
        en.setCallbackTypes(new Class[] { NoOp.class, MethodInterceptor.class } );
        en.setCallbackFilter(new CallbackFilter() {
            @Override
            public int accept(Method method) {
                if(method.getAnnotation(JSFunction.class) != null) {
                    return 1;
                };
                return 0;
            }
        });
        en.setSuperclass(Child.class);
        Class proxy = en.createClass();
//        ScriptableObject.defineClass(scope, proxy);
        ScriptableObject.defineClass(scope, Child.class);

        /*ScriptableObject.getClassPrototype(scope, "Child").setPrototype(parentCons.construct(cx, scope, new Object[0]));

        FunctionObject childCons = (FunctionObject)scope.get("Child", scope);
        Object inst = childCons.construct(cx, scope, new Object[0]);
        scope.put("child", scope, inst);*/

        Method meth = Test.class.getMethod("testConstructor"/*, Class.class*/);
        System.out.println("kk>");

        FunctionObject lolWat = new FunctionObject("Child", meth, scope);
        lolWat.addAsConstructor(scope, ScriptableObject.getClassPrototype(scope, "Child"));
        scope.put("Child", scope, lolWat);
        System.out.println(cx.evaluateString(scope, "new Child()", "<test>", 1, null));
//        System.out.println(cx.evaluateString(scope, "new Child().func() + ' ' + new Child().func2()", "<test>", 1, null));
    }

    public static Scriptable testConstructor(/*Class<? extends Scriptable> clazz*/) throws Exception {
        return new Child();
    }

    @Inherited
    @Retention(RetentionPolicy.RUNTIME)
    @Target(ElementType.METHOD)
    public static @interface TestAnnotation {

    }
    public static class Parent extends ScriptableObject {
//        @JSFunction
//        public static String func(Context cx, Scriptable thisObj, Object[] args, Function funObj) {
//            return "Parent";
//        }

        @JSFunction
        public String func() {
            return "Parent";
        }

        @JSFunction
        public native String func2();

        @Override
        public String getClassName() {
            return "Parent";
        }

        static void blah() {

        }
    }

    public static class Child /*extends ScriptableObject { //*/ extends Parent {
        public Child() {
            /*((Factory)this).setCallback(0, NoOp.INSTANCE);
            ((Factory)this).setCallback(1, new MethodInterceptor() {
                @Override
                public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
                    return "HOLY FUCKING SHIT INTERCEPTED " + method.getName() + " NIGGA.";
                }
            });*/
        }

/*
        @JSConstructor
        public Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj, boolean inNewExpr) {
            Object inst = Enhancer.create(Child.class, new MethodInterceptor() {
                @Override
                public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
//                    if(method.getName() == "childFunc") { return "HOLY FUCKING SHIT INTERCEPTED NIGGA."; }
                    try {
                        return methodProxy.invokeSuper(o, objects);
                    }
                    catch(IllegalAccessError iae) {
                        return "saved boi.";
                    }
                }
            });

            return (Scriptable)inst;
        }*/

        public String jsFunc_anotherFunc() {
            return "Child unannotated.";
        }



        @JSFunction
        @TestAnnotation
        public String childFunc() {
            return "Child";
        }

        @Override
        public String getClassName() {
            return "Child";
        }
    }
}
