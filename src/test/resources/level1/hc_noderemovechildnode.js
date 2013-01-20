
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
    The "removeChild(oldChild)" method removes the node
    indicated by "oldChild". 
    
    Retrieve the second p element and remove its first child.
    After the removal, the second p element should have 5 element
    children and the first child should now be the child
    that used to be at the second position in the list.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_noderemovechildnode() {
   var success;
    var doc;
      var elementList;
      var emList;
      var employeeNode;
      var childList;
      var oldChild;
      var child;
      var childName;
      var length;
      var removedChild;
      var removedName;
      var nodeType;
      expected = new Array();
      expected[0] = "strong";
      expected[1] = "code";
      expected[2] = "sup";
      expected[3] = "var";
      expected[4] = "acronym";

      var actual = new Array();

      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      childList = employeeNode.childNodes;

      emList = employeeNode.getElementsByTagName("em");
      oldChild = emList.item(0);
      removedChild = employeeNode.removeChild(oldChild);
      removedName = removedChild.nodeName;

      assertEqualsAutoCase("element", "removedName","em",removedName);
       for(var indexN65688 = 0;indexN65688 < childList.length; indexN65688++) {
      child = childList.item(indexN65688);
      nodeType = child.nodeType;

      childName = child.nodeName;

      
	if(
	(1 == nodeType)
	) {
	actual[actual.length] = childName;

	}
	
		else {
			assertEquals("textNodeType",3,nodeType);
       assertEquals("textNodeName","#text",childName);
       
		}
	
	}
   assertEqualsListAutoCase("element", "childNames",expected,actual);
       
}




function runTest() {
   hc_noderemovechildnode();
}
