
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
An Entity is accessed, setNodeValue is called with a non-null argument, but getNodeValue
should still return null.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-527DCFF2
*/
function hc_nodevalue07() {
   var success;
    var doc;
      var newNode;
      var newValue;
      var nodeMap;
      var docType;
      doc = load("hc_staff");
      docType = doc.doctype;

      
	if(
	
	!(
	(builder.contentType == "text/html")
)

	) {
	assertNotNull("docTypeNotNull",docType);
nodeMap = docType.entities;

      assertNotNull("entitiesNotNull",nodeMap);
newNode = nodeMap.getNamedItem("alpha");
      assertNotNull("entityNotNull",newNode);
newValue = newNode.nodeValue;

      assertNull("initiallyNull",newValue);
    newNode.nodeValue = "This should have no effect";

      newValue = newNode.nodeValue;

      assertNull("nullAfterAttemptedChange",newValue);
    
	}
	
}




function runTest() {
   hc_nodevalue07();
}
