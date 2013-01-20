
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
  Load a document and invoke its 
   "getDocumentElement()" method.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-87CD092
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
*/
function hc_documentgetrootnode() {
   var success;
    var doc;
      var root;
      var rootName;
      doc = load("hc_staff");
      root = doc.documentElement;

      rootName = root.nodeName;

      
	if(
	
	(builder.contentType == "image/svg+xml")

	) {
	assertEquals("svgTagName","svg",rootName);
       
	}
	
		else {
			assertEqualsAutoCase("element", "docElemName","html",rootName);
       
		}
	
}




function runTest() {
   hc_documentgetrootnode();
}
