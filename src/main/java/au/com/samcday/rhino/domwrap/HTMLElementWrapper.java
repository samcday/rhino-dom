package au.com.samcday.rhino.domwrap;

import org.w3c.dom.html.HTMLElement;

public class HTMLElementWrapper extends ElementWrapper<HTMLElement> implements HTMLElement {
    @Override
    @InstanceGetter
    public native String getId();

    @Override
    @InstanceSetter
    public native void setId(String id);

    @Override
    @InstanceGetter
    public native String getTitle();

    @Override
    @InstanceSetter
    public native void setTitle(String title);

    @Override
    @InstanceGetter
    public native String getLang();

    @Override
    @InstanceSetter
    public native void setLang(String lang);

    @Override
    @InstanceGetter
    public native String getDir();

    @Override
    @InstanceSetter
    public native void setDir(String dir);

    @Override
    @InstanceSetter
    public native void setClassName(String className);
}
