
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
   Invoke the "getTagName()" method one the 
   root node. The value returned should be "html" or "svg". 

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-104682815
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
*/
function hc_elementgettagname() {
   var success;
    var doc;
      var root;
      var tagname;
      doc = load("hc_staff");
      root = doc.documentElement;

      tagname = root.tagName;

      
	if(
	
	(builder.contentType == "image/svg+xml")

	) {
	assertEquals("svgTagname","svg",tagname);
       
	}
	
		else {
			assertEqualsAutoCase("element", "tagname","html",tagname);
       
		}
	
}




function runTest() {
   hc_elementgettagname();
}
