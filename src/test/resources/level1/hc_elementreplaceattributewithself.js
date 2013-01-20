
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
This test calls setAttributeNode to replace an attribute with itself.  
Since the node is not an attribute of another Element, it would
be inappropriate to throw an INUSE_ATTRIBUTE_ERR.

This test was derived from elementinuserattributeerr which
inadvertanly made this test.

* @author Curt Arnold
* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-887236154
*/
function hc_elementreplaceattributewithself() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var streetAttr;
      var replacedAttr;
      var value;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(2);
      streetAttr = testEmployee.getAttributeNode("class");
      replacedAttr = testEmployee.setAttributeNode(streetAttr);
      assertSame("replacedAttr",streetAttr,replacedAttr);

}




function runTest() {
   hc_elementreplaceattributewithself();
}
