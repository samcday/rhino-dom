
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
   Create a list of all the children elements of the third
   employee and access its first child by invoking the 
   "item(index)" method with an index=0.  This should
   result in node with a nodeName of "#text" or "em".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_nodelistreturnfirstitem() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var employeeList;
      var child;
      var childName;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(2);
      employeeList = employeeNode.childNodes;

      child = employeeList.item(0);
      childName = child.nodeName;

      
	if(
	("#text" == childName)
	) {
	assertEquals("nodeName_w_space","#text",childName);
       
	}
	
		else {
			assertEqualsAutoCase("element", "nodeName_wo_space","em",childName);
       
		}
	
}




function runTest() {
   hc_nodelistreturnfirstitem();
}
