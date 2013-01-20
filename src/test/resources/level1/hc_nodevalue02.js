
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
An comment is created, setNodeValue is called with a non-null argument, but getNodeValue
should still return null.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
*/
function hc_nodevalue02() {
   var success;
    var doc;
      var newNode;
      var newValue;
      doc = load("hc_staff");
      newNode = doc.createComment("This is a new Comment node");
      newValue = newNode.nodeValue;

      assertEquals("initial","This is a new Comment node",newValue);
       newNode.nodeValue = "This should have an effect";

      newValue = newNode.nodeValue;

      assertEquals("afterChange","This should have an effect",newValue);
       
}




function runTest() {
   hc_nodevalue02();
}
