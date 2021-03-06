
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
Creating a processing instruction with an empty target should cause an INVALID_CHARACTER_ERR.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-135944439
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-135944439')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
*/
function documentinvalidcharacterexceptioncreatepi1() {
   var success;
    var doc;
      var badPI;
      doc = load("hc_staff");
      
	if(
	
	(builder.contentType == "text/html")

	) {
	
	{
		success = false;
		try {
            badPI = doc.createProcessingInstruction("foo","data");
        }
		catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
		}
		assertTrue("throw_NOT_SUPPORTED_ERR",success);
	}

	}
	
		else {
			
	{
		success = false;
		try {
            badPI = doc.createProcessingInstruction("","data");
        }
		catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 5);
		}
		assertTrue("throw_INVALID_CHARACTER_ERR",success);
	}

		}
	
}




function runTest() {
   documentinvalidcharacterexceptioncreatepi1();
}
