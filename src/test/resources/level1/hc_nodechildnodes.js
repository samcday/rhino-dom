
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
    
    The "getChildNodes()" method returns a NodeList
    that contains all children of this node. 
    
    Retrieve the second employee and check the NodeList
    returned by the "getChildNodes()" method.   The
    length of the list should be 13.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_nodechildnodes() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var childNode;
      var childNodes;
      var nodeType;
      var childName;
      var actual = new Array();

      expected = new Array();
      expected[0] = "em";
      expected[1] = "strong";
      expected[2] = "code";
      expected[3] = "sup";
      expected[4] = "var";
      expected[5] = "acronym";

      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      childNodes = employeeNode.childNodes;

      for(var indexN65644 = 0;indexN65644 < childNodes.length; indexN65644++) {
      childNode = childNodes.item(indexN65644);
      nodeType = childNode.nodeType;

      childName = childNode.nodeName;

      
	if(
	(1 == nodeType)
	) {
	actual[actual.length] = childName;

	}
	
		else {
			assertEquals("textNodeType",3,nodeType);
       
		}
	
	}
   assertEqualsListAutoCase("element", "elementNames",expected,actual);
       
}




function runTest() {
   hc_nodechildnodes();
}
