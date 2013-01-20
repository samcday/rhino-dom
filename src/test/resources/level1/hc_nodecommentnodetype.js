
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
    The "getNodeType()" method for a Comment Node
    returns the constant value 8.
    
    Retrieve the nodes from the document and check for
    a comment node and invoke the "getNodeType()" method.   This should   
    return 8. 

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
*/
function hc_nodecommentnodetype() {
   var success;
    var doc;
      var testList;
      var commentNode;
      var commentNodeName;
      var nodeType;
      doc = load("hc_staff");
      testList = doc.childNodes;

      for(var indexN65600 = 0;indexN65600 < testList.length; indexN65600++) {
      commentNode = testList.item(indexN65600);
      commentNodeName = commentNode.nodeName;

      
	if(
	("#comment" == commentNodeName)
	) {
	nodeType = commentNode.nodeType;

      assertEquals("existingCommentNodeType",8,nodeType);
       
	}
	
	}
   commentNode = doc.createComment("This is a comment");
      nodeType = commentNode.nodeType;

      assertEquals("createdCommentNodeType",8,nodeType);
       
}




function runTest() {
   hc_nodecommentnodetype();
}
