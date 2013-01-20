
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
   Retrieve the entire DOM document and invoke its 
   "getImplementation()" method.  This should create a
   DOMImplementation object whose "hasFeature(feature,
   version)" method is invoked with "feature" equal to "html" or "xml".
   The method should return a boolean "true".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=245
*/
function hc_domimplementationfeaturexml() {
   var success;
    var doc;
      var domImpl;
      var state;
      doc = load("hc_staff");
      domImpl = doc.implementation;

	if(
	
	(builder.contentType == "text/html")

	) {
	state = domImpl.hasFeature("html","1.0");
assertTrue("supports_html_1.0",state);

	}
	
		else {
			state = domImpl.hasFeature("xml","1.0");
assertTrue("supports_xml_1.0",state);

		}
	
}




function runTest() {
   hc_domimplementationfeaturexml();
}
