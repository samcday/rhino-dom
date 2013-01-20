
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
    and the subtree under it if deep=true.
    
    Retrieve the second employee and invoke the
    "cloneNode(deep)" method with deep=true.   The
    method should clone this node and the subtree under it.
    The NodeName of each child in the returned node is 
    checked to insure the entire subtree under the second
    employee was cloned.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_nodeclonenodetrue() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var clonedNode;
      var clonedList;
      var clonedChild;
      var clonedChildName;
      var origList;
      var origChild;
      var origChildName;
      var result = new Array();

      var expected = new Array();

      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      origList = employeeNode.childNodes;

      for(var indexN65637 = 0;indexN65637 < origList.length; indexN65637++) {
      origChild = origList.item(indexN65637);
      origChildName = origChild.nodeName;

      expected[expected.length] = origChildName;

	}
   clonedNode = employeeNode.cloneNode(true);
      clonedList = clonedNode.childNodes;

      for(var indexN65659 = 0;indexN65659 < clonedList.length; indexN65659++) {
      clonedChild = clonedList.item(indexN65659);
      clonedChildName = clonedChild.nodeName;

      result[result.length] = clonedChildName;

	}
   assertEqualsList("clone",expected,result);
       
}




function runTest() {
   hc_nodeclonenodetrue();
}
