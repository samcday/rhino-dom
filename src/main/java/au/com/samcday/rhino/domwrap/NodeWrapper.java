package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.*;
import org.mozilla.javascript.annotations.JSConstructor;
import org.mozilla.javascript.annotations.JSFunction;
import org.mozilla.javascript.annotations.JSGetter;
import org.mozilla.javascript.annotations.JSSetter;
import org.w3c.dom.*;
import org.w3c.dom.Node;

public class NodeWrapper extends ScriptableObject implements Node {
    private Node node;

    public NodeWrapper() { }
    public NodeWrapper(Node node) {
        this.node = node;
    }

    @JSConstructor
    public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj, boolean inNewExpr) {
        if(args.length != 1 || !(args[0] instanceof Node)) {
            throw Context.reportRuntimeError("Illegal constructor");
        }
        Node node = (Node)args[0];
        return new NodeWrapper(node);
    }

    @Override
    public String getClassName() {
        return "Node";
    }

    @Override
    @JSGetter
    public String getNodeName() {
        return this.node.getNodeName();
    }

    @Override
    @JSGetter
    public String getNodeValue() throws DOMException {
        return this.node.getNodeValue();
    }

    @Override
    @JSSetter
    public void setNodeValue(String nodeValue) throws DOMException {
        this.node.setNodeValue(nodeValue);
    }

    @Override
    @JSGetter
    public short getNodeType() {
        return this.node.getNodeType();
    }

    @Override
    @JSGetter
    public Node getParentNode() {
        return this.node.getParentNode();
    }

    @Override
    @JSGetter
    public NodeList getChildNodes() {
        Context ctx = Context.getCurrentContext();
        return (NodeList)Context.getCurrentContext().getWrapFactory().wrap(ctx, this.getParentScope(), this.node.getChildNodes(), NodeList.class);
//        return this.node.getChildNodes();
    }

    @Override
    public Node getFirstChild() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    @JSGetter
    public Node getLastChild() {
        return DomWrap.wrap(this.node.getLastChild(), this.getParentScope());
    }

    @Override
    public Node getPreviousSibling() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node getNextSibling() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    @JSGetter
    public NamedNodeMap getAttributes() {
        return DomWrap.wrap(this.node.getAttributes(), this.getParentScope());
    }

    @Override
    public Document getOwnerDocument() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node insertBefore(Node newChild, Node refChild) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node replaceChild(Node newChild, Node oldChild) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node removeChild(Node oldChild) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Node appendChild(Node newChild) throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @JSFunction
    public Node appendChild(NodeWrapper newChild) {
        return DomWrap.wrap(this.node.appendChild(DomWrap.unwrap(newChild)), this.getParentScope());
    }

    @Override
    @JSFunction
    public boolean hasChildNodes() {
        return this.node.hasChildNodes();
    }

    @Override
    public Node cloneNode(boolean deep) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void normalize() {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean isSupported(String feature, String version) {
        return false;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getNamespaceURI() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getPrefix() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setPrefix(String prefix) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getLocalName() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean hasAttributes() {
        return false;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getBaseURI() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public short compareDocumentPosition(Node other) throws DOMException {
        return 0;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String getTextContent() throws DOMException {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setTextContent(String textContent) throws DOMException {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean isSameNode(Node other) {
        return false;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public String lookupPrefix(String namespaceURI) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean isDefaultNamespace(String namespaceURI) {
        return false;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    @JSFunction
    public String lookupNamespaceURI(String prefix) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean isEqualNode(Node arg) {
        return false;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Object getFeature(String feature, String version) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Object setUserData(String key, Object data, UserDataHandler handler) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Object getUserData(String key) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    protected <T> T hintedWrap(Class<T> typeHint, Object o) {
        Context ctx = Context.getCurrentContext();
        return (T)ctx.getWrapFactory().wrap(ctx, this.getParentScope(), o, typeHint);
    }

    public Node getNode() {
        return node;
    }
}
