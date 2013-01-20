
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
Evaluate Node.ownerDocument on the second "p" element.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#node-ownerDoc
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
*/
function hc_nodegetownerdocument() {
   var success;
    var doc;
      var elementList;
      var docNode;
      var ownerDocument;
      var docElement;
      var elementName;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      docNode = elementList.item(1);
      ownerDocument = docNode.ownerDocument;

      docElement = ownerDocument.documentElement;

      elementName = docElement.nodeName;

      
	if(
	
	(builder.contentType == "image/svg+xml")

	) {
	assertEquals("svgNodeName","svg",elementName);
       
	}
	
		else {
			assertEqualsAutoCase("element", "ownerDocElemTagName","html",elementName);
       
		}
	
}




function runTest() {
   hc_nodegetownerdocument();
}
