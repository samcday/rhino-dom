
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
    The "appendChild(newChild)" method returns the node
    added.
    
    Append a newly created node to the child list of the 
    second employee and check the NodeName returned.   The
    "getNodeName()" method should return "br".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
*/
function hc_nodeappendchildgetnodename() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var childList;
      var newChild;
      var appendNode;
      var childName;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      childList = employeeNode.childNodes;

      newChild = doc.createElement("br");
      appendNode = employeeNode.appendChild(newChild);
      childName = appendNode.nodeName;

      assertEqualsAutoCase("element", "nodeName","br",childName);
       
}




function runTest() {
   hc_nodeappendchildgetnodename();
}
