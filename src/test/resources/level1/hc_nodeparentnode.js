
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
    The "getParentNode()" method returns the parent
    of this node. 
    
    Retrieve the second employee and invoke the 
    "getParentNode()" method on this node.   It should
    be set to "body".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1060184317
*/
function hc_nodeparentnode() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var parentNode;
      var parentName;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      parentNode = employeeNode.parentNode;

      parentName = parentNode.nodeName;

      assertEqualsAutoCase("element", "parentNodeName","body",parentName);
       
}




function runTest() {
   hc_nodeparentnode();
}
