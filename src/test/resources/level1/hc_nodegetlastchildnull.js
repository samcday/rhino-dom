
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

    If there is not a last child then the "getLastChild()"
    method returns null.

  Retrieve the text of the first "em" element and invoke the "getFirstChild()" method.   It
    should return null.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-61AD09FB
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_nodegetlastchildnull() {
   var success;
    var doc;
      var emList;
      var emNode;
      var emText;
      var nullChild;
      doc = load("hc_staff");
      emList = doc.getElementsByTagName("em");
      emNode = emList.item(0);
      emText = emNode.firstChild;

      nullChild = emText.lastChild;

      assertNull("nullChild",nullChild);
    
}




function runTest() {
   hc_nodegetlastchildnull();
}
