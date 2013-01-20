
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
    The "getElementsByTagName(tagName)" method returns a 
   NodeList of all the Elements with a given tagName
   in a pre-order traversal of the tree.
   
   Retrieve the entire DOM document and invoke its 
   "getElementsByTagName(tagName)" method with tagName
   equal to "strong".  The method should return a NodeList 
   that contains 5 elements.  The FOURTH item in the
   list is retrieved and output.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-A6C9094
*/
function hc_documentgetelementsbytagnamevalue() {
   var success;
    var doc;
      var nameList;
      var nameNode;
      var firstChild;
      var childValue;
      doc = load("hc_staff");
      nameList = doc.getElementsByTagName("strong");
      nameNode = nameList.item(3);
      firstChild = nameNode.firstChild;

      childValue = firstChild.nodeValue;

      assertEquals("documentGetElementsByTagNameValueAssert","Jeny Oconnor",childValue);
       
}




function runTest() {
   hc_documentgetelementsbytagnamevalue();
}
