
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
    The "removeChild(oldChild)" method removes the child node
    indicated by "oldChild" from the list of children and
    returns it. 
    
    Remove the first employee by invoking the
    "removeChild(oldChild)" method an checking the
    node returned by the "getParentNode()" method.   It
    should be set to null.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
*/
function hc_noderemovechild() {
   var success;
    var doc;
      var rootNode;
      var childList;
      var childToRemove;
      var removedChild;
      var parentNode;
      doc = load("hc_staff");
      rootNode = doc.documentElement;

      childList = rootNode.childNodes;

      childToRemove = childList.item(1);
      removedChild = rootNode.removeChild(childToRemove);
      parentNode = removedChild.parentNode;

      assertNull("parentNodeNull",parentNode);
    
}




function runTest() {
   hc_noderemovechild();
}
