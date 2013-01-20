
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
    The "getSpecified()" method for an Attr node should 
  be set to true if the attribute was explicitly given
  a value.
  Retrieve the attribute named "domestic" from the last 
  child of of the first employee and examine the value 
  returned by the "getSpecified()" method.  This test uses 
  the "getNamedItem(name)" method from the NamedNodeMap 
  interface.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-862529273
*/
function hc_attrspecifiedvalue() {
   var success;
    var doc;
      var addressList;
      var testNode;
      var attributes;
      var domesticAttr;
      var state;
      doc = load("hc_staff");
      addressList = doc.getElementsByTagName("acronym");
      testNode = addressList.item(0);
      attributes = testNode.attributes;

      domesticAttr = attributes.getNamedItem("title");
      state = domesticAttr.specified;

      assertTrue("acronymTitleSpecified",state);

}




function runTest() {
   hc_attrspecifiedvalue();
}
