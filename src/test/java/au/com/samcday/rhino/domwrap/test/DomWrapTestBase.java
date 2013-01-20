package au.com.samcday.rhino.domwrap.test;

import au.com.samcday.rhino.domwrap.DomWrap;
import nu.validator.htmlparser.dom.HtmlDocumentBuilder;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.w3c.dom.Document;

import java.io.File;
import java.io.InputStreamReader;

public class DomWrapTestBase {
    private ScriptableObject scope;

    @Before
    public void setUp() throws Exception {
        Context cx = Context.enter();
        cx.setOptimizationLevel(0);
        this.scope = cx.initStandardObjects();
        DomWrap.init(this.scope);
        this.scope.defineFunctionProperties(new String[] { "assertNull", "assertNotNull", "assertEquals", "assertTrue", "assertSize", "load" }, DomWrapTestBase.class, 0);
    }

    private static Object getAssertionParam(Object obj) {
        if(obj == Context.getUndefinedValue()) return null;
        if(obj instanceof Number) return ((Number)obj).doubleValue();
        return obj;
    }

    public static void assertNotNull(Context cx, Scriptable thisObj, Object[] args, Function funObj) {
        Assert.assertNotNull((String)args[0], getAssertionParam(args[1]));
    }

    public static void assertNull(Context cx, Scriptable thisObj, Object[] args, Function funObj) {
        Assert.assertNull((String)args[0], getAssertionParam(args[1]));
    }

    public static void assertEquals(Context cx, Scriptable thisObj, Object[] args, Function funObj) {
        Assert.assertEquals((String)args[0], getAssertionParam(args[1]), getAssertionParam(args[2]));
    }

    public static void assertTrue(Context cx, Scriptable thisObj, Object[] args, Function funObj) {
        Assert.assertTrue((String)args[0], (Boolean)getAssertionParam(args[1]));
    }

    public static void assertSize(Context cx, Scriptable thisObj, Object[] args, Function funObj) {
        Integer expectedSize = ((Number)args[1]).intValue();
        Scriptable obj = (Scriptable)args[2];
        Assert.assertEquals((String)args[0], (long)expectedSize, ((Number)obj.get("length", thisObj)).intValue());
    }

    public static Scriptable load(Context cx, Scriptable thisObj, Object[] args, Function funObj) throws Exception {
        String docName = (String)args[0];
        HtmlDocumentBuilder docBuilder = new HtmlDocumentBuilder();
        Document doc;
        doc = docBuilder.parse(DomWrapTestBase.class.getClassLoader().getResourceAsStream("files/" + docName + ".html"));
        Scriptable wrappedDoc = DomWrap.newWrap(doc, thisObj);
        return wrappedDoc;
    }

    public void runTest(String testName) {
        try {
            Context cx = Context.getCurrentContext();

            ClassLoader cl = this.getClass().getClassLoader();

            // Evaluate the JS test code in hack up some of the vars it expects.
            File testFile = new File(testName);
            cx.evaluateReader(this.scope, new InputStreamReader(cl.getResourceAsStream("testsupport.js")), "testsupport.js", 1, null);
            cx.evaluateReader(this.scope, new InputStreamReader(cl.getResourceAsStream(testName + ".js")), testFile.getName() + ".js", 1, null);
            Scriptable builder = cx.newObject(this.scope);
            builder.put("contentType", builder, "");
            this.scope.put("builder", this.scope, builder);

            ((Function)this.scope.get("runTest")).call(cx, this.scope, this.scope, new Object[0]);
        }
        catch(Exception e) {
            throw new RuntimeException("Failed to run test " + testName, e);
        }
    }

    @After
    public void tearDown() {
        Context.exit();
        this.scope = null;
    }
}
