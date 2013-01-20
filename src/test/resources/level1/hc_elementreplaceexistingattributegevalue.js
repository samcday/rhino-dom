
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
If the "setAttributeNode(newAttr)" method replaces an
existing Attr node with the same name, then it should
return the previously existing Attr node.

Retrieve the last child of the third employee and add a
new attribute node.  The new attribute node is "class",
which is already present in this Element.  The method
should return the existing Attr node(old "class" Attr).
This test uses the "createAttribute(name)" method
from the Document interface.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-887236154
*/
function hc_elementreplaceexistingattributegevalue() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var newAttribute;
      var streetAttr;
      var value;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(2);
      newAttribute = doc.createAttribute("class");
      streetAttr = testEmployee.setAttributeNode(newAttribute);
      assertNotNull("previousAttrNotNull",streetAttr);
value = streetAttr.value;

      assertEquals("previousAttrValue","No",value);
       
}




function runTest() {
   hc_elementreplaceexistingattributegevalue();
}
