
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
The "getNodeType()" method for a Document Node
returns the constant value 9.

Retrieve the document and invoke the "getNodeType()" 
method.   The method should return 9. 

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
*/
function hc_nodedocumentnodetype() {
   var success;
    var doc;
      var nodeType;
      doc = load("hc_staff");
      nodeType = doc.nodeType;

      assertEquals("nodeDocumentNodeTypeAssert1",9,nodeType);
       
}




function runTest() {
   hc_nodedocumentnodetype();
}
