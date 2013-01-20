
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
    The "getFirstChild()" method returns the first child
    of this node. 
    
    Retrieve the second employee and invoke the
    "getFirstChild()" method.   The NodeName returned
    should be "#text" or "EM".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-169727388
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_nodegetfirstchild() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var fchildNode;
      var childName;
      var nodeType;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      employeeNode = elementList.item(1);
      fchildNode = employeeNode.firstChild;

      childName = fchildNode.nodeName;

      
	if(
	("#text" == childName)
	) {
	assertEquals("firstChild_w_whitespace","#text",childName);
       
	}
	
		else {
			assertEqualsAutoCase("element", "firstChild_wo_whitespace","em",childName);
       
		}
	
}




function runTest() {
   hc_nodegetfirstchild();
}
