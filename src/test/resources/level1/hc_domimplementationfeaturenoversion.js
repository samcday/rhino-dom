
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
   "getImplementation()" method.  This should create a
   DOMImplementation object whose "hasFeature(feature,
   version)" method is invoked with version equal to "".
   If the version is not specified, supporting any version
   feature will cause the method to return "true".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
* @see http://www.w3.org/2000/11/DOM-Level-2-errata#core-14
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=245
*/
function hc_domimplementationfeaturenoversion() {
   var success;
    var doc;
      var domImpl;
      var state;
      doc = load("hc_staff");
      domImpl = doc.implementation;

	if(
	
	(builder.contentType == "text/html")

	) {
	state = domImpl.hasFeature("HTML","");

	}
	
		else {
			state = domImpl.hasFeature("XML","");

		}
	assertTrue("hasFeatureBlank",state);

}




function runTest() {
   hc_domimplementationfeaturenoversion();
}
