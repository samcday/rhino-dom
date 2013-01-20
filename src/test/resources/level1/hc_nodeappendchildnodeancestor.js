
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
    The "appendChild(newChild)" method raises a 
    HIERARCHY_REQUEST_ERR DOMException if the node to 
    append is one of this node's ancestors.
    
    Retrieve the second employee and attempt to append 
    an ancestor node(root node) to it.
    An attempt to make such an addition should raise the 
    desired exception.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-184E7107')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
*/
function hc_nodeappendchildnodeancestor() {
   var success;
    var doc;
      var newChild;
      var elementList;
      var employeeNode;
      var childList;
      var oldChild;
      var appendedChild;
      doc = load("hc_staff");
      newChild = doc.documentElement;

      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      
	{
		success = false;
		try {
            appendedChild = employeeNode.appendChild(newChild);
        }
		catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 3);
		}
		assertTrue("throw_HIERARCHY_REQUEST_ERR",success);
	}

}




function runTest() {
   hc_nodeappendchildnodeancestor();
}
