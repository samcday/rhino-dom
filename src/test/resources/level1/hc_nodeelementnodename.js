
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
    Retrieve the first Element Node(Root Node) of the   
    DOM object and check the string returned by the            
    "getNodeName()" method.   It should be equal to its
    tagName. 

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
*/
function hc_nodeelementnodename() {
   var success;
    var doc;
      var elementNode;
      var elementName;
      doc = load("hc_staff");
      elementNode = doc.documentElement;

      elementName = elementNode.nodeName;

      
	if(
	
	(builder.contentType == "image/svg+xml")

	) {
	assertEquals("svgNodeName","svg",elementName);
       
	}
	
		else {
			assertEqualsAutoCase("element", "nodeName","html",elementName);
       
		}
	
}




function runTest() {
   hc_nodeelementnodename();
}
