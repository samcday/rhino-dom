package au.com.samcday.rhino.domwrap;

import org.mozilla.javascript.annotations.JSFunction;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class NodeListWrapper extends Wrapper<NodeList> implements NodeList {
    @Override
    @JSFunction
    public native Node item(int index);

    @Override
    @InstanceGetter
    public native int getLength();
}
