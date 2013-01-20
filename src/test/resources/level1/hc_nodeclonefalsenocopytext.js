
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
    The "cloneNode(deep)" method does not copy text unless it
    is deep cloned.(Test for deep=false)
    
    Retrieve the fourth child of the second employee and
    the "cloneNode(deep)" method with deep=false.   The
    duplicate node returned by the method should not copy
    any text data contained in this node.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
*/
function hc_nodeclonefalsenocopytext() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var childList;
      var childNode;
      var clonedNode;
      var lastChildNode;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      childList = employeeNode.childNodes;

      childNode = childList.item(3);
      clonedNode = childNode.cloneNode(false);
      lastChildNode = clonedNode.lastChild;

      assertNull("nodeCloneFalseNoCopyTextAssert1",lastChildNode);
    
}




function runTest() {
   hc_nodeclonefalsenocopytext();
}
