
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
    The "getNextSibling()" method returns the node immediately
    following this node. 
    
    Retrieve the first child of the second employee and
    invoke the "getNextSibling()" method.   It should return
    a node with the NodeName of "#text".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6AC54C2F
*/
function hc_nodegetnextsibling() {
   var success;
    var doc;
      var elementList;
      var emNode;
      var nsNode;
      var nsName;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("em");
      emNode = elementList.item(1);
      nsNode = emNode.nextSibling;

      nsName = nsNode.nodeName;

      assertEquals("whitespace","#text",nsName);
       
}




function runTest() {
   hc_nodegetnextsibling();
}
