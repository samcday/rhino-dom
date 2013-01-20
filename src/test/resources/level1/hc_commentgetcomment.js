
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
    A comment is all the characters between the starting
  '<!--' and ending '-->' 
  Retrieve the nodes of the DOM document.  Search for a 
  comment node and the content is its value.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1334481328
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=509
*/
function hc_commentgetcomment() {
   var success;
    var doc;
      var elementList;
      var child;
      var childName;
      var childValue;
      var commentCount = 0;
      var childType;
      var attributes;
      doc = load("hc_staff");
      elementList = doc.childNodes;

      for(var indexN65630 = 0;indexN65630 < elementList.length; indexN65630++) {
      child = elementList.item(indexN65630);
      childType = child.nodeType;

      
	if(
	(8 == childType)
	) {
	childName = child.nodeName;

      assertEquals("nodeName","#comment",childName);
       childValue = child.nodeValue;

      assertEquals("nodeValue"," This is comment number 1.",childValue);
       attributes = child.attributes;

      assertNull("attributes",attributes);
    commentCount += 1;

	}
	
	}
   	assertTrue("atMostOneComment",
      
	(commentCount < 2)
);

}




function runTest() {
   hc_commentgetcomment();
}
