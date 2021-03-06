
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
    The "insertBefore(newChild,refChild)" method inserts the
    node "newChild" before the node "refChild". 
    
    Insert a newly created Element node before the second
    sup element in the document and check the "newChild"
    and "refChild" after insertion for correct placement.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=261
*/
function hc_nodeinsertbefore() {
   var success;
    var doc;
      var elementList;
      var employeeNode;
      var childList;
      var refChild;
      var newChild;
      var child;
      var childName;
      var insertedNode;
      var actual = new Array();

      expected = new Array();
      expected[0] = "em";
      expected[1] = "strong";
      expected[2] = "code";
      expected[3] = "br";
      expected[4] = "sup";
      expected[5] = "var";
      expected[6] = "acronym";

      var nodeType;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("sup");
      refChild = elementList.item(2);
      employeeNode = refChild.parentNode;

      childList = employeeNode.childNodes;

      newChild = doc.createElement("br");
      insertedNode = employeeNode.insertBefore(newChild,refChild);
      for(var indexN65681 = 0;indexN65681 < childList.length; indexN65681++) {
      child = childList.item(indexN65681);
      nodeType = child.nodeType;

      
	if(
	(1 == nodeType)
	) {
	childName = child.nodeName;

      actual[actual.length] = childName;

	}
	
	}
   assertEqualsListAutoCase("element", "nodeNames",expected,actual);
       
}




function runTest() {
   hc_nodeinsertbefore();
}
