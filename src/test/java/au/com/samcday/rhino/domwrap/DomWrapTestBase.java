package au.com.samcday.rhino.domwrap;

import nu.validator.htmlparser.dom.HtmlDocumentBuilder;
import org.junit.After;
import org.junit.Before;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ScriptableObject;
import org.w3c.dom.Document;

import java.io.ByteArrayInputStream;

public class DomWrapTestBase {
    private ScriptableObject scope;

    @Before
    public void setUp() {
        Context cx = Context.enter();
        cx.setOptimizationLevel(-1);
        this.scope = cx.initStandardObjects();
    }

    public void runTest(String testName) {
        HtmlDocumentBuilder docBuilder = new HtmlDocumentBuilder();
        Document doc;
        try {
            doc = docBuilder.parse(this.getClass().getClassLoader().getResourceAsStream(testName + ".html"));
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
