
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
    The "setAttributeNode(newAttr)" method returns the
   null value if no previously existing Attr node with the
   same name was replaced.
   
   Retrieve the last child of the third employee and add a 
   new attribute to it.  The new attribute node added is 
   "lang", which is not part of this Element.  The   
   method should return the null value.   
   This test uses the "createAttribute(name)"
   method from the Document interface. 

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-887236154
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
*/
function hc_elementsetattributenodenull() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var newAttribute;
      var districtAttr;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(2);
      newAttribute = doc.createAttribute("lang");
      districtAttr = testEmployee.setAttributeNode(newAttribute);
      assertNull("elementSetAttributeNodeNullAssert",districtAttr);
    
}




function runTest() {
   hc_elementsetattributenodenull();
}
