
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
    The "getNamedItem(name)" method returns null of the 
   specified name did not identify any node in the map. 
   
   Retrieve the second employee and create a NamedNodeMap 
   listing of the attributes of the last child.  Once the
   list is created an invocation of the "getNamedItem(name)"
   method is done with name="lang".  This name does not 
   match any names in the list therefore the method should
   return null.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1074577549
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
*/
function hc_namednodemapreturnnull() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var attributes;
      var districtNode;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(1);
      attributes = testEmployee.attributes;

      districtNode = attributes.getNamedItem("lang");
      assertNull("langAttrNull",districtNode);
    
}




function runTest() {
   hc_namednodemapreturnnull();
}
