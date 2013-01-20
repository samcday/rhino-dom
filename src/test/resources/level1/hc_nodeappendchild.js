
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
    Retrieve the second "p" and append a "br" Element
    node to the list of children.   The last node in the list
    is then retrieved and its NodeName examined.   The
    "getNodeName()" method should return "br".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
*/
function hc_nodeappendchild() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var childList;
      var createdNode;
      var lchild;
      var childName;
      var appendedChild;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      childList = employeeNode.childNodes;

      createdNode = doc.createElement("br");
      appendedChild = employeeNode.appendChild(createdNode);
      lchild = employeeNode.lastChild;

      childName = lchild.nodeName;

      assertEqualsAutoCase("element", "nodeName","br",childName);
       
}




function runTest() {
   hc_nodeappendchild();
}
