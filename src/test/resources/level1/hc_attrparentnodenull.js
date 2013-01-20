
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
The "getParentNode()" method for an Attr node should return null.  Retrieve
the attribute named "domestic" from the last child of the first employee
and examine its parentNode attribute.  This test also uses the "getNamedItem(name)"
method from the NamedNodeMap interface.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1060184317
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
*/
function hc_attrparentnodenull() {
   var success;
    var doc;
      var addressList;
      var testNode;
      var attributes;
      var domesticAttr;
      var s;
      doc = load("hc_staff");
      addressList = doc.getElementsByTagName("acronym");
      testNode = addressList.item(0);
      attributes = testNode.attributes;

      domesticAttr = attributes.getNamedItem("title");
      s = domesticAttr.parentNode;

      assertNull("attrParentNodeNullAssert",s);
    
}




function runTest() {
   hc_attrparentnodenull();
}
