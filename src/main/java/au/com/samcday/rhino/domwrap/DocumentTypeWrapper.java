package au.com.samcday.rhino.domwrap;

import org.w3c.dom.DocumentType;
import org.w3c.dom.NamedNodeMap;

public class DocumentTypeWrapper extends NodeWrapper<DocumentType> implements DocumentType {
    @Override
    @InstanceGetter
    public native String getName();

    @Override
    @InstanceGetter
    public native NamedNodeMap getEntities();

    @Override
    @InstanceGetter
    public native NamedNodeMap getNotations();

    @Override
    @InstanceGetter
    public native String getPublicId();

    @Override
    @InstanceGetter
    public native String getSystemId();

    @Override
    @InstanceGetter
    public native String getInternalSubset();
}
