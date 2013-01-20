
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
   employee and access its last child by invoking the 
   "item(index)" method with an index=length-1.  This should
   result in node with nodeName="#text" or acronym.
* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_nodelistreturnlastitem() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var employeeList;
      var child;
      var childName;
      var index;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(2);
      employeeList = employeeNode.childNodes;

      index = employeeList.length;

      index -= 1;
child = employeeList.item(index);
      childName = child.nodeName;

      
	if(
	(12 == index)
	) {
	assertEquals("lastNodeName_w_whitespace","#text",childName);
       
	}
	
		else {
			assertEqualsAutoCase("element", "lastNodeName","acronym",childName);
       assertEquals("index",5,index);
       
		}
	
}




function runTest() {
   hc_nodelistreturnlastitem();
}
