package au.com.samcday.rhino.domwrap;

import nu.validator.htmlparser.dom.HtmlDocumentBuilder;
import org.junit.After;
import org.junit.Before;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.w3c.dom.Document;

import java.io.InputStreamReader;

import org.junit.Assert;

public class DomWrapTestBase {
    private ScriptableObject scope;

    @Before
    public void setUp() throws Exception {
        Context cx = Context.enter();
        cx.setOptimizationLevel(-1);
        this.scope = cx.initStandardObjects();
        DomWrap.init(this.scope);
        this.scope.put("builder", this.scope, cx.newObject(this.scope));
        this.scope.defineFunctionProperties(new String[] { "assertNull", "assertEquals" }, DomWrapTestBase.class, 0);
    }

    private static Object getAssertionParam(Object obj) {
        if(obj == Context.getUndefinedValue()) return null;
        if(obj instanceof Number) return ((Number)obj).doubleValue();
        return obj;
    }

    public static void assertNull(Context cx, Scriptable thisObj, Object[] args, Function funObj) {
        Assert.assertNull((String)args[0], getAssertionParam(args[1]));
    }

    public static void assertEquals(Context cx, Scriptable thisObj, Object[] args, Function funObj) {
        Assert.assertEquals((String)args[0], getAssertionParam(args[1]), getAssertionParam(args[2]));
    }

    public void runTest(String testName) {
        try {
            Context cx = Context.getCurrentContext();
            HtmlDocumentBuilder docBuilder = new HtmlDocumentBuilder();
            Document doc;
            doc = docBuilder.parse(this.getClass().getClassLoader().getResourceAsStream(testName + ".html"));
            DocumentWrapper wrappedDoc = NodeWrapper.wrap(doc, this.scope);
            cx.evaluateReader(this.scope, new InputStreamReader(this.getClass().getClassLoader().getResourceAsStream(testName + ".js")), testName + ".js", 1, null);
            this.scope.put("document", this.scope, wrappedDoc);
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
