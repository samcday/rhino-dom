
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
    The "removeChild(oldChild)" method returns 
    the node being removed.
    
    Remove the first child of the second employee 
    and check the NodeName returned by the 
    "removeChild(oldChild)" method.   The returned node
    should have a NodeName equal to "#text".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_noderemovechildgetnodename() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var childList;
      var oldChild;
      var removedChild;
      var childName;
      var oldName;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      childList = employeeNode.childNodes;

      oldChild = childList.item(0);
      oldName = oldChild.nodeName;

      removedChild = employeeNode.removeChild(oldChild);
      assertNotNull("notnull",removedChild);
childName = removedChild.nodeName;

      assertEquals("nodeName",oldName,childName);
       
}




function runTest() {
   hc_noderemovechildgetnodename();
}
