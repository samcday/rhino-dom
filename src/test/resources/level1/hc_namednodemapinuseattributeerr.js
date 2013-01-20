
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
The "setNamedItem(arg)" method raises a
INUSE_ATTRIBUTE_ERR DOMException if "arg" is an
Attr that is already in an attribute of another Element.

Create a NamedNodeMap object from the attributes of the
last child of the third employee and attempt to add
an attribute that is already being used by the first
employee.  This should raise the desired exception.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INUSE_ATTRIBUTE_ERR'])
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1025163788
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-1025163788')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INUSE_ATTRIBUTE_ERR'])
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
*/
function hc_namednodemapinuseattributeerr() {
   var success;
    var doc;
      var elementList;
      var firstNode;
      var testNode;
      var attributes;
      var domesticAttr;
      var setAttr;
      var setNode;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      firstNode = elementList.item(0);
      domesticAttr = doc.createAttribute("title");
      domesticAttr.value = "Yα";

      setAttr = firstNode.setAttributeNode(domesticAttr);
      elementList = doc.getElementsByTagName("acronym");
      testNode = elementList.item(2);
      attributes = testNode.attributes;

      
	{
		success = false;
		try {
            setNode = attributes.setNamedItem(domesticAttr);
        }
		catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 10);
		}
		assertTrue("throw_INUSE_ATTRIBUTE_ERR",success);
	}

}




function runTest() {
   hc_namednodemapinuseattributeerr();
}
