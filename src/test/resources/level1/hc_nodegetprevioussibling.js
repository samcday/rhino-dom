
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
    The "getPreviousSibling()" method returns the node
    immediately preceding this node. 
    
    Retrieve the second child of the second employee and    
    invoke the "getPreviousSibling()" method.   It should
    return a node with a NodeName of "#text".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-640FB3C8
*/
function hc_nodegetprevioussibling() {
   var success;
    var doc;
      var elementList;
      var nameNode;
      var psNode;
      var psName;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("strong");
      nameNode = elementList.item(1);
      psNode = nameNode.previousSibling;

      psName = psNode.nodeName;

      assertEquals("whitespace","#text",psName);
       
}




function runTest() {
   hc_nodegetprevioussibling();
}
