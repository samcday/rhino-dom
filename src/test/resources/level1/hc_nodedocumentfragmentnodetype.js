
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
    The "getNodeType()" method for a DocumentFragment Node
    returns the constant value 11.

    Invoke the "createDocumentFragment()" method and    
    examine the NodeType of the document fragment
    returned by the "getNodeType()" method.   The method 
    should return 11. 

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
*/
function hc_nodedocumentfragmentnodetype() {
   var success;
    var doc;
      var documentFragmentNode;
      var nodeType;
      doc = load("hc_staff");
      documentFragmentNode = doc.createDocumentFragment();
      nodeType = documentFragmentNode.nodeType;

      assertEquals("nodeDocumentFragmentNodeTypeAssert1",11,nodeType);
       
}




function runTest() {
   hc_nodedocumentfragmentnodetype();
}
