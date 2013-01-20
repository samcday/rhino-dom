
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
    The "setAttributeNode(newAttr)" method raises an 
   "WRONG_DOCUMENT_ERR DOMException if the "newAttr" 
   was created from a different document than the one that
   created this document.

   Retrieve the last employee and attempt to set a new
   attribute node for its "employee" element.  The new
   attribute was created from a document other than the
   one that created this element, therefore a
   WRONG_DOCUMENT_ERR DOMException should be raised.

   This test uses the "createAttribute(newAttr)" method
   from the Document interface.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='WRONG_DOCUMENT_ERR'])
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-887236154
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-887236154')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='WRONG_DOCUMENT_ERR'])
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
*/
function hc_elementwrongdocumenterr() {
   var success;
    var doc1;
      var doc2;
      var newAttribute;
      var addressElementList;
      var testAddress;
      var attrAddress;
      doc1 = load("hc_staff");
      doc2 = load("hc_staff");
      newAttribute = doc2.createAttribute("newAttribute");
      addressElementList = doc1.getElementsByTagName("acronym");
      testAddress = addressElementList.item(4);
      
	{
		success = false;
		try {
            attrAddress = testAddress.setAttributeNode(newAttribute);
        }
		catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 4);
		}
		assertTrue("throw_WRONG_DOCUMENT_ERR",success);
	}

}




function runTest() {
   hc_elementwrongdocumenterr();
}
