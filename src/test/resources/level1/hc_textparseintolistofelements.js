
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
    Retrieve the textual data from the last child of the 
    second employee.   That node is composed of two   
    EntityReference nodes and two Text nodes.   After
    the content node is parsed, the "acronym" Element
    should contain four children with each one of the
    EntityReferences containing one child.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-11C98490
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-745549614
*/
function hc_textparseintolistofelements() {
   var success;
    var doc;
      var elementList;
      var addressNode;
      var childList;
      var child;
      var value;
      var grandChild;
      var length;
      var result = new Array();

      expectedNormal = new Array();
      expectedNormal[0] = "β";
      expectedNormal[1] = " Dallas, ";
      expectedNormal[2] = "γ";
      expectedNormal[3] = "\n 98554";

      expectedExpanded = new Array();
      expectedExpanded[0] = "β Dallas, γ\n 98554";

      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      addressNode = elementList.item(1);
      childList = addressNode.childNodes;

      length = childList.length;

      for(var indexN65660 = 0;indexN65660 < childList.length; indexN65660++) {
      child = childList.item(indexN65660);
      value = child.nodeValue;

      
	if(
	
	(value == null)

	) {
	grandChild = child.firstChild;

      assertNotNull("grandChildNotNull",grandChild);
value = grandChild.nodeValue;

      result[result.length] = value;

	}
	
		else {
			result[result.length] = value;

		}
	
	}
   
	if(
	(1 == length)
	) {
	assertEqualsList("assertEqCoalescing",expectedExpanded,result);
       
	}
	
		else {
			assertEqualsList("assertEqNormal",expectedNormal,result);
       
		}
	
}




function runTest() {
   hc_textparseintolistofelements();
}
