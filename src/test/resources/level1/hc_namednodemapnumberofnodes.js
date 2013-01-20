
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
   Retrieve the second "p" element and evaluate Node.attributes.length.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6D0FB19E
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=250
*/
function hc_namednodemapnumberofnodes() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var attributes;
      var length;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(2);
      attributes = testEmployee.attributes;

      length = attributes.length;

      
	if(
	
	(builder.contentType == "text/html")

	) {
	assertEquals("htmlLength",2,length);
       
	}
	
		else {
			assertEquals("length",3,length);
       
		}
	
}




function runTest() {
   hc_namednodemapnumberofnodes();
}
