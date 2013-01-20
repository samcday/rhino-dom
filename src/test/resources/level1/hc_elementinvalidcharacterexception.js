
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
    The "setAttribute(name,value)" method raises an 
   "INVALID_CHARACTER_ERR DOMException if the specified 
   name contains an invalid character.   

   Retrieve the last child of the first employee and 
   call its "setAttribute(name,value)" method with    
   "strong" containing an invalid character. 

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-F68F082')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
*/
function hc_elementinvalidcharacterexception() {
   var success;
    var doc;
      var elementList;
      var testAddress;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testAddress = elementList.item(0);
      
	{
		success = false;
		try {
            testAddress.setAttribute("invalid^Name","value");
        }
		catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 5);
		}
		assertTrue("throw_INVALID_CHARACTER_ERR",success);
	}

}




function runTest() {
   hc_elementinvalidcharacterexception();
}
