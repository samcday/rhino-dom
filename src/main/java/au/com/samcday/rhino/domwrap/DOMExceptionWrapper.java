package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.JavaScriptException;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.annotations.JSConstructor;
import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.DOMException;

import java.util.HashMap;
import java.util.Map;

public class DOMExceptionWrapper extends ScriptableObject {
    private static final Map<Integer, String> CODES_TO_LABELS = new HashMap<Integer, String>() {{
        this.put(1, "INDEX_SIZE_ERR");
        this.put(2, "DOMSTRING_SIZE_ERR");
        this.put(3, "HIERARCHY_REQUEST_ERR");
        this.put(4, "WRONG_DOCUMENT_ERR");
        this.put(5, "INVALID_CHARACTER_ERR");
        this.put(6, "NO_DATA_ALLOWED_ERR");
        this.put(7, "NO_MODIFICATION_ALLOWED_ERR");
        this.put(8, "NOT_FOUND_ERR");
        this.put(9, "NOT_SUPPORTED_ERR");
        this.put(10, "INUSE_ATTRIBUTE_ERR");
        this.put(11, "INVALID_STATE_ERR");
        this.put(12, "SYNTAX_ERR");
        this.put(13, "INVALID_MODIFICATION_ERR");
        this.put(14, "NAMESPACE_ERR");
        this.put(15, "INVALID_ACCESS_ERR");
        this.put(16, "VALIDATION_ERR");
        this.put(17, "TYPE_MISMATCH_ERR");
    }};

    int code;
    String name;
    String message;

    public static JavaScriptException create(Scriptable scope, DOMException dome) {
        return new JavaScriptException(Context.getCurrentContext().newObject(scope, "DOMException", new Object[] { dome.code }), null, 0);
    }

    public DOMExceptionWrapper() { }

    @JSConstructor
    public DOMExceptionWrapper(int code) {
        this.code = code;
        this.name = CODES_TO_LABELS.get(code);
        this.message = this.name + ": DOM Exception " + this.code;
    }

    @Override
    public Object get(String name, Scriptable start) {
        if(name.equals("code")) return this.code;
        if(name.equals("message")) return this.message;
        if(name.equals("name")) return this.name;

        return super.get(name, start);
    }

    @Override
    public String getClassName() {
        return "DOMException";
    }

    @JSFunction
    public String toString() {
        return this.message;
    }
}
