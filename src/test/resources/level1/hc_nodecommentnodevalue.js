
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
    The string returned by the "getNodeValue()" method for a 
    Comment Node is the content of the comment.
    
    Retrieve the comment in the XML file and   
    check the string returned by the "getNodeValue()" method. 
    It should be equal to "This is comment number 1".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
*/
function hc_nodecommentnodevalue() {
   var success;
    var doc;
      var elementList;
      var commentNode;
      var commentName;
      var commentValue;
      doc = load("hc_staff");
      elementList = doc.childNodes;

      for(var indexN65600 = 0;indexN65600 < elementList.length; indexN65600++) {
      commentNode = elementList.item(indexN65600);
      commentName = commentNode.nodeName;

      
	if(
	("#comment" == commentName)
	) {
	commentValue = commentNode.nodeValue;

      assertEquals("value"," This is comment number 1.",commentValue);
       
	}
	
	}
   commentNode = doc.createComment(" This is a comment");
      commentValue = commentNode.nodeValue;

      assertEquals("createdCommentNodeValue"," This is a comment",commentValue);
       
}




function runTest() {
   hc_nodecommentnodevalue();
}
