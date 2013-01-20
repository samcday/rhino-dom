
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

    If there is not a node immediately following this node the

    "getNextSibling()" method returns null.

    

    Retrieve the first child of the second employee and

    invoke the "getNextSibling()" method.   It should

    be set to null. 


* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6AC54C2F
*/
function hc_nodegetnextsiblingnull() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var lcNode;
      var nsNode;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      lcNode = employeeNode.lastChild;

      nsNode = lcNode.nextSibling;

      assertNull("nodeGetNextSiblingNullAssert1",nsNode);
    
}




function runTest() {
   hc_nodegetnextsiblingnull();
}
