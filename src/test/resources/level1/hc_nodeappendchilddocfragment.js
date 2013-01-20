
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
    If the "newChild" is a DocumentFragment object then
    all its content is added to the child list of this node.
    
    Create and populate a new DocumentFragment object and
    append it to the second employee.   After the 
    "appendChild(newChild)" method is invoked retrieve the
    new nodes at the end of the list, they should be the
    two Element nodes from the DocumentFragment.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
*/
function hc_nodeappendchilddocfragment() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var childList;
      var newdocFragment;
      var newChild1;
      var newChild2;
      var child;
      var childName;
      var result = new Array();

      var appendedChild;
      var nodeType;
      expected = new Array();
      expected[0] = "em";
      expected[1] = "strong";
      expected[2] = "code";
      expected[3] = "sup";
      expected[4] = "var";
      expected[5] = "acronym";
      expected[6] = "br";
      expected[7] = "b";

      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      childList = employeeNode.childNodes;

      newdocFragment = doc.createDocumentFragment();
      newChild1 = doc.createElement("br");
      newChild2 = doc.createElement("b");
      appendedChild = newdocFragment.appendChild(newChild1);
      appendedChild = newdocFragment.appendChild(newChild2);
      appendedChild = employeeNode.appendChild(newdocFragment);
      for(var indexN65698 = 0;indexN65698 < childList.length; indexN65698++) {
      child = childList.item(indexN65698);
      nodeType = child.nodeType;

      
	if(
	(1 == nodeType)
	) {
	childName = child.nodeName;

      result[result.length] = childName;

	}
	
	}
   assertEqualsListAutoCase("element", "nodeNames",expected,result);
       
}




function runTest() {
   hc_nodeappendchilddocfragment();
}
