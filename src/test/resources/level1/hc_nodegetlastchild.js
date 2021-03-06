
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
    The "getLastChild()" method returns the last child
    of this node. 
    
    Retrieve the second employee and invoke the
    "getLastChild()" method.   The NodeName returned
    should be "#text".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-61AD09FB
*/
function hc_nodegetlastchild() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var lchildNode;
      var childName;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      lchildNode = employeeNode.lastChild;

      childName = lchildNode.nodeName;

      assertEquals("whitespace","#text",childName);
       
}




function runTest() {
   hc_nodegetlastchild();
}
