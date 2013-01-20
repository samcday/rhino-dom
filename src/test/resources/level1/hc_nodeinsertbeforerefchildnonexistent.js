
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
    The "insertBefore(newChild,refChild)" method raises a 
    NOT_FOUND_ERR DOMException if the reference child is
    not a child of this node.
    
    Retrieve the second employee and attempt to insert a
    new node before a reference node that is not a child
    of this node.   An attempt to insert before a non child
    node should raise the desired exception.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-952280727')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
*/
function hc_nodeinsertbeforerefchildnonexistent() {
   var success;
    var doc;
      var refChild;
      var newChild;
      var elementList;
      var elementNode;
      var insertedNode;
      doc = load("hc_staff");
      newChild = doc.createElement("br");
      refChild = doc.createElement("b");
      elementList = doc.getElementsByTagName("p");
      elementNode = elementList.item(1);
      
	{
		success = false;
		try {
            insertedNode = elementNode.insertBefore(newChild,refChild);
        }
		catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 8);
		}
		assertTrue("throw_NOT_FOUND_ERR",success);
	}

}




function runTest() {
   hc_nodeinsertbeforerefchildnonexistent();
}
