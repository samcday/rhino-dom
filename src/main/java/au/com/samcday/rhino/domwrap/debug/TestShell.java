package au.com.samcday.rhino.domwrap.debug;

import au.com.samcday.rhino.domwrap.DomWrap;
import nu.validator.htmlparser.dom.HtmlDocumentBuilder;
import org.apache.html.dom.HTMLDOMImplementationImpl;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.tools.shell.Global;
import org.mozilla.javascript.tools.shell.Main;
import org.w3c.dom.DOMException;
import org.w3c.dom.Document;
import org.w3c.dom.DocumentType;
import org.w3c.dom.NodeList;
import org.w3c.dom.html.HTMLDOMImplementation;
import org.w3c.dom.html.HTMLDocument;

import java.io.ByteArrayInputStream;

public class TestShell {
    public static void main(String... args) throws Exception {
        final Global oldGlobal = Main.global;
        Main.global = new NewGlobal();
        Main.exec(args);
    }

    public static class NewGlobal extends Global {
        @Override
        public void init(ContextFactory factory) {
            factory.addListener(new ContextFactory.Listener() {
                @Override
                public void contextCreated(Context cx) {
                    Context.enter(cx);
                    HtmlDocumentBuilder docBuilder = new HtmlDocumentBuilder(new MyHTMLDOMImplementation());
                    Document doc;
                    try {
                        doc = docBuilder.parse(new ByteArrayInputStream("<!doctype html><html><head><title>Test</title></head><body></body></html>".getBytes()));
                        DomWrap.init(Main.getGlobal());
                    }
                    catch(Exception e) {
                        throw new RuntimeException(e);
                    }
                    Scriptable wrappedDoc = DomWrap.newWrap(doc, Main.getGlobal());
                    Main.getGlobal().put("document", Main.getGlobal(), wrappedDoc);
                    Context.exit();
                }

                @Override
                public void contextReleased(Context cx) {
                    //To change body of implemented methods use File | Settings | File Templates.
                }
            });
            super.init(factory);
        }
    }

    public static class MyHTMLDOMImplementation implements HTMLDOMImplementation {
        HTMLDOMImplementation impl = HTMLDOMImplementationImpl.getHTMLDOMImplementation();

        @Override
        public HTMLDocument createHTMLDocument(String title) {
            return this.impl.createHTMLDocument(title);
        }

        @Override
        public boolean hasFeature(String feature, String version) {
            return this.impl.hasFeature(feature, version);
        }

        @Override
        public DocumentType createDocumentType(String qualifiedName, String publicId, String systemId) throws DOMException {
            return this.impl.createDocumentType(qualifiedName, publicId, systemId);
        }

        @Override
        public Document createDocument(String namespaceURI, String qualifiedName, DocumentType doctype) throws DOMException {
            if(namespaceURI == null && qualifiedName == null && doctype == null) {
                Document doc = this.createHTMLDocument("");
                NodeList nodeList = doc.getChildNodes();
                for(int i = 0; i < nodeList.getLength(); i++) {
                    doc.removeChild(nodeList.item(i));
                }
                return doc;
            }
            return this.impl.createDocument(namespaceURI, qualifiedName, doctype);
        }

        @Override
        public Object getFeature(String feature, String version) {
            return this.impl.getFeature(feature, version);
        }
    }
}
