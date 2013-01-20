
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
    The "setAttribute(name,value)" method adds a new attribute
   to the Element 
   
   Retrieve the last child of the last employee, then 
   add an attribute to it by invoking the             
   "setAttribute(name,value)" method.  It should create
   a "strong" attribute with an assigned value equal to 
   "value".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
*/
function hc_elementaddnewattribute() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var attrValue;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(4);
      testEmployee.setAttribute("lang","EN-us");
      attrValue = testEmployee.getAttribute("lang");
      assertEquals("attrValue","EN-us",attrValue);
       
}




function runTest() {
   hc_elementaddnewattribute();
}
