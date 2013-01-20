
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
    The NodeList returned by the "getChildNodes()" method
    is live.   Changes on the node's children are immediately
    reflected on the nodes returned in the NodeList.
    
    Create a NodeList of the children of the second employee
    and then add a newly created element that was created
    by the "createElement()" method(Document Interface) to
    the second employee by using the "appendChild()" method.
    The length of the NodeList should reflect this new
    addition to the child list.   It should return the value 14.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
*/
function hc_nodechildnodesappendchild() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var childList;
      var createdNode;
      var childNode;
      var childName;
      var childType;
      var textNode;
      var actual = new Array();

      expected = new Array();
      expected[0] = "em";
      expected[1] = "strong";
      expected[2] = "code";
      expected[3] = "sup";
      expected[4] = "var";
      expected[5] = "acronym";
      expected[6] = "br";

      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      childList = employeeNode.childNodes;

      createdNode = doc.createElement("br");
      employeeNode = employeeNode.appendChild(createdNode);
      for(var indexN65671 = 0;indexN65671 < childList.length; indexN65671++) {
      childNode = childList.item(indexN65671);
      childName = childNode.nodeName;

      childType = childNode.nodeType;

      
	if(
	(1 == childType)
	) {
	actual[actual.length] = childName;

	}
	
		else {
			assertEquals("textNodeType",3,childType);
       
		}
	
	}
   assertEqualsListAutoCase("element", "childElements",expected,actual);
       
}




function runTest() {
   hc_nodechildnodesappendchild();
}
