
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
    The "removeAttributeNode(oldAttr)" method returns the
   node that was removed. 
   
   Retrieve the last child of the third employee and
   remove its "class" Attr node.  The method should  
   return the old attribute node.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D589198
*/
function hc_elementremoveattributenode() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var streetAttr;
      var removedAttr;
      var removedValue;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(2);
      streetAttr = testEmployee.getAttributeNode("class");
      removedAttr = testEmployee.removeAttributeNode(streetAttr);
      assertNotNull("removedAttrNotNull",removedAttr);
removedValue = removedAttr.value;

      assertEquals("elementRemoveAttributeNodeAssert","No",removedValue);
       
}




function runTest() {
   hc_elementremoveattributenode();
}
