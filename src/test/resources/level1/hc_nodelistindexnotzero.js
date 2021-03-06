
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
    The items in the list are accessible via an integral
   index starting from zero.
   (Index not equal 0)
   
   Create a list of all the children elements of the third
   employee and access its fourth child by using an index
   of 3 and calling getNodeName() which should return
   "strong" (no whitespace)  or "#text" (with whitespace).

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_nodelistindexnotzero() {
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

      child = employeeList.item(3);
      childName = child.nodeName;

      
	if(
	("#text" == childName)
	) {
	assertEquals("childName_space","#text",childName);
       
	}
	
		else {
			assertEqualsAutoCase("element", "childName_strong","strong",childName);
       
		}
	
}




function runTest() {
   hc_nodelistindexnotzero();
}
