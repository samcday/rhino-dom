
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
    The duplicate node returned by the "cloneNode(deep)"
    method does not have a ParentNode.
    
    Retrieve the second employee and invoke the
    "cloneNode(deep)" method with deep=false.   The
    duplicate node returned should return null when the
    "getParentNode()" is invoked.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
*/
function hc_nodeclonegetparentnull() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var clonedNode;
      var parentNode;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      clonedNode = employeeNode.cloneNode(false);
      parentNode = clonedNode.parentNode;

      assertNull("nodeCloneGetParentNullAssert1",parentNode);
    
}




function runTest() {
   hc_nodeclonegetparentnull();
}
