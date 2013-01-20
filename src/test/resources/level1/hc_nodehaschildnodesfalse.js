
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
    The "hasChildNodes()" method returns false if the node
    does not have any children.
    
    Retrieve the text of the first "em" element and invoke the "hasChildNodes()" method.   It
    should return false.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-810594187
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_nodehaschildnodesfalse() {
   var success;
    var doc;
      var emList;
      var emNode;
      var emText;
      var hasChild;
      doc = load("hc_staff");
      emList = doc.getElementsByTagName("em");
      emNode = emList.item(0);
      emText = emNode.firstChild;

      hasChild = emText.hasChildNodes();
      assertFalse("hasChild",hasChild);

}




function runTest() {
   hc_nodehaschildnodesfalse();
}
