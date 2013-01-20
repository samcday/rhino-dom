
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
An attempt to add remove an notation should result in a NO_MODIFICATION_ERR.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D46829EF
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D58B193
*/
function hc_notationsremovenameditem1() {
   var success;
    var doc;
      var notations;
      var docType;
      var retval;
      doc = load("hc_staff");
      docType = doc.doctype;

      
	if(
	
	!(
	(builder.contentType == "text/html")
)

	) {
	assertNotNull("docTypeNotNull",docType);
notations = docType.notations;

      assertNotNull("notationsNotNull",notations);

	{
		success = false;
		try {
            retval = notations.removeNamedItem("notation1");
        }
		catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 7);
		}
		assertTrue("throw_NO_MODIFICATION_ALLOWED_ERR",success);
	}

	}
	
}




function runTest() {
   hc_notationsremovenameditem1();
}
