
/*
Copyright Â© 2001-2004 World Wide Web Consortium, 
(Massachusetts Institute of Technology, European Research Consortium 
for Informatics and Mathematics, Keio University). All 
Rights Reserved. This work is distributed under the W3CÂ® Software License [1] in the 
hope that it will be useful, but WITHOUT ANY WARRANTY; without even 
the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 

[1] http://www.w3.org/Consortium/Legal/2002/copyright-software-20021231
*/

/**
* 
    The "getSpecified()" method for an Attr node should return true if the 
  value of the attribute is changed. 
  Retrieve the attribute named "class" from the last 
  child of of the THIRD employee and change its 
  value to "Yes"(which is the default DTD value).  This
  should cause the "getSpecified()" method to be true.
  This test uses the "setAttribute(name,value)" method
  from the Element interface and the "getNamedItem(name)"
  method from the NamedNodeMap interface.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-862529273
*/
function hc_attrspecifiedvaluechanged() {
   var success;
    var doc;
      var addressList;
      var testNode;
      var attributes;
      var streetAttr;
      var state;
      doc = load("hc_staff");
      addressList = doc.getElementsByTagName("acronym");
      testNode = addressList.item(2);
      testNode.setAttribute("class","Yα");
      attributes = testNode.attributes;

      streetAttr = attributes.getNamedItem("class");
      state = streetAttr.specified;

      assertTrue("acronymClassSpecified",state);

}




function runTest() {
   hc_attrspecifiedvaluechanged();
}
