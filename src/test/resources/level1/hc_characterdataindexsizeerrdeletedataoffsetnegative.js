
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
    The "deleteData(offset,count)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset
   is negative. 
   
   Retrieve the character data of the last child of the
   first employee and invoke its "deleteData(offset,count)"
   method with offset=-5 and count=3.  It should raise the
   desired exception since the offset is negative.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
*/
function hc_characterdataindexsizeerrdeletedataoffsetnegative() {
   var success;
    var doc;
      var elementList;
      var nameNode;
      var child;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      nameNode = elementList.item(0);
      child = nameNode.firstChild;

      
	{
		success = false;
		try {
            child.deleteData(-5,3);
        }
		catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
		}
		assertTrue("throws_INDEX_SIZE_ERR",success);
	}

}




function runTest() {
   hc_characterdataindexsizeerrdeletedataoffsetnegative();
}
