
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
    The "substringData(offset,count)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset
   is greater than the number of characters in the string.
   
   Retrieve the character data of the last child of the
   first employee and invoke its "substringData(offset,count)
   method with offset=40 and count=3.  It should raise the
   desired exception since the offsets value is greater
   than the length.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
*/
function hc_characterdataindexsizeerrsubstringoffsetgreater() {
   var success;
    var doc;
      var elementList;
      var nameNode;
      var child;
      var badString;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      nameNode = elementList.item(0);
      child = nameNode.firstChild;

      
	{
		success = false;
		try {
            badString = child.substringData(40,3);
        }
		catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
		}
		assertTrue("throw_INDEX_SIZE_ERR",success);
	}

}




function runTest() {
   hc_characterdataindexsizeerrsubstringoffsetgreater();
}
