
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
    If the "newChild" is already in the tree, it is first
    removed before the new one is appended.
    
    Retrieve the "em" second employee and   
    append the first child to the end of the list.   After
    the "appendChild(newChild)" method is invoked the first 
    child should be the one that was second and the last
    child should be the one that was first.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_nodeappendchildchildexists() {
   var success;
    var doc;
      var elementList;
      var childList;
      var childNode;
      var newChild;
      var memberNode;
      var memberName;
      var refreshedActual = new Array();

      var actual = new Array();

      var nodeType;
      expected = new Array();
      expected[0] = "strong";
      expected[1] = "code";
      expected[2] = "sup";
      expected[3] = "var";
      expected[4] = "acronym";
      expected[5] = "em";

      var appendedChild;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      childNode = elementList.item(1);
      childList = childNode.getElementsByTagName("*");
      newChild = childList.item(0);
      appendedChild = childNode.appendChild(newChild);
      for(var indexN65669 = 0;indexN65669 < childList.length; indexN65669++) {
      memberNode = childList.item(indexN65669);
      memberName = memberNode.nodeName;

      actual[actual.length] = memberName;

	}
   assertEqualsListAutoCase("element", "liveByTagName",expected,actual);
       childList = childNode.childNodes;

      for(var indexN65692 = 0;indexN65692 < childList.length; indexN65692++) {
      memberNode = childList.item(indexN65692);
      nodeType = memberNode.nodeType;

      
	if(
	(1 == nodeType)
	) {
	memberName = memberNode.nodeName;

      refreshedActual[refreshedActual.length] = memberName;

	}
	
	}
   assertEqualsListAutoCase("element", "refreshedChildNodes",expected,refreshedActual);
       
}




function runTest() {
   hc_nodeappendchildchildexists();
}
