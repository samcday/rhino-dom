
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
    The string returned by the "getNodeName()" method for a 
    Comment Node is "#comment".
    
    Retrieve the Comment node in the XML file 
    and check the string returned by the "getNodeName()" 
    method.   It should be equal to "#comment".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
*/
function hc_nodecommentnodename() {
   var success;
    var doc;
      var elementList;
      var commentNode;
      var nodeType;
      var commentName;
      var commentNodeName;
      doc = load("hc_staff");
      elementList = doc.childNodes;

      for(var indexN65604 = 0;indexN65604 < elementList.length; indexN65604++) {
      commentNode = elementList.item(indexN65604);
      nodeType = commentNode.nodeType;

      
	if(
	(8 == nodeType)
	) {
	commentNodeName = commentNode.nodeName;

      assertEquals("existingNodeName","#comment",commentNodeName);
       
	}
	
	}
   commentNode = doc.createComment("This is a comment");
      commentNodeName = commentNode.nodeName;

      assertEquals("createdNodeName","#comment",commentNodeName);
       
}




function runTest() {
   hc_nodecommentnodename();
}
