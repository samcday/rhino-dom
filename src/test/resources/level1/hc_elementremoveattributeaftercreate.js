
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
    The "removeAttributeNode(oldAttr)" method removes the 
   specified attribute. 
   
   Retrieve the last child of the third employee, add a
   new "lang" attribute to it and then try to remove it. 
   To verify that the node was removed use the
   "getNamedItem(name)" method from the NamedNodeMap
   interface.  It also uses the "getAttributes()" method
   from the Node interface.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D589198
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
*/
function hc_elementremoveattributeaftercreate() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var newAttribute;
      var attributes;
      var districtAttr;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(2);
      newAttribute = doc.createAttribute("lang");
      districtAttr = testEmployee.setAttributeNode(newAttribute);
      districtAttr = testEmployee.removeAttributeNode(newAttribute);
      attributes = testEmployee.attributes;

      districtAttr = attributes.getNamedItem("lang");
      assertNull("removed_item_null",districtAttr);
    
}




function runTest() {
   hc_elementremoveattributeaftercreate();
}
