
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
    The "cloneNode(deep)" method returns a copy of the node
    only if deep=false.
    
    Retrieve the second employee and invoke the
    "cloneNode(deep)" method with deep=false.   The
    method should only clone this node.   The NodeName and
    length of the NodeList are checked.   The "getNodeName()"
    method should return "employee" and the "getLength()"
    method should return 0.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
*/
function hc_nodeclonenodefalse() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var clonedNode;
      var cloneName;
      var cloneChildren;
      var length;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      clonedNode = employeeNode.cloneNode(false);
      cloneName = clonedNode.nodeName;

      assertEqualsAutoCase("element", "strong","p",cloneName);
       cloneChildren = clonedNode.childNodes;

      length = cloneChildren.length;

      assertEquals("length",0,length);
       
}




function runTest() {
   hc_nodeclonenodefalse();
}
