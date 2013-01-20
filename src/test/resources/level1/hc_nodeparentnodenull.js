
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
    The "getParentNode()" method invoked on a node that has
    just been created and not yet added to the tree is null. 

    Create a new "employee" Element node using the             
    "createElement(name)" method from the Document interface.
    Since this new node has not yet been added to the tree,
    the "getParentNode()" method will return null.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1060184317
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
*/
function hc_nodeparentnodenull() {
   var success;
    var doc;
      var createdNode;
      var parentNode;
      doc = load("hc_staff");
      createdNode = doc.createElement("br");
      parentNode = createdNode.parentNode;

      assertNull("parentNode",parentNode);
    
}




function runTest() {
   hc_nodeparentnodenull();
}
