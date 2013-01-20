
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
    The "getChildNodes()" method returns a NodeList
    that contains all children of this node.   If there
    are not any children, this is a NodeList that does not 
    contain any nodes. 

    Retrieve the character data of the second "em" node and
    invoke the "getChildNodes()" method.   The
    NodeList returned should not have any nodes.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_nodechildnodesempty() {
   var success;
    var doc;
      var elementList;
      var childList;
      var employeeNode;
      var textNode;
      var length;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("em");
      employeeNode = elementList.item(1);
      textNode = employeeNode.firstChild;

      childList = textNode.childNodes;

      length = childList.length;

      assertEquals("length_zero",0,length);
       
}




function runTest() {
   hc_nodechildnodesempty();
}
