
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
    The "getAttributes()" method invoked on a Comment 
    Node returns null.

    Find any comment that is an immediate child of the root
    and assert that Node.attributes is null.  Then create
    a new comment node (in case they had been omitted) and
    make the assertion.    

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=263
*/
function hc_nodecommentnodeattributes() {
   var success;
    var doc;
      var commentNode;
      var nodeList;
      var attrList;
      var nodeType;
      doc = load("hc_staff");
      nodeList = doc.childNodes;

      for(var indexN65603 = 0;indexN65603 < nodeList.length; indexN65603++) {
      commentNode = nodeList.item(indexN65603);
      nodeType = commentNode.nodeType;

      
	if(
	(8 == nodeType)
	) {
	attrList = commentNode.attributes;

      assertNull("existingCommentAttributesNull",attrList);
    
	}
	
	}
   commentNode = doc.createComment("This is a comment");
      attrList = commentNode.attributes;

      assertNull("createdCommentAttributesNull",attrList);
    
}




function runTest() {
   hc_nodecommentnodeattributes();
}
