
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
    The "getLength()" method returns the number of nodes
   in the list.(Test for EMPTY list)
   
   Create a list of all the children of the Text node 
   inside the first child of the third employee and
   invoke the "getLength()" method.   It should contain
   the value 0.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-203510337
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
*/
function hc_nodelistindexgetlengthofemptylist() {
   var success;
    var doc;
      var emList;
      var emNode;
      var textNode;
      var textList;
      var length;
      doc = load("hc_staff");
      emList = doc.getElementsByTagName("em");
      emNode = emList.item(2);
      textNode = emNode.firstChild;

      textList = textNode.childNodes;

      length = textList.length;

      assertEquals("length",0,length);
       
}




function runTest() {
   hc_nodelistindexgetlengthofemptylist();
}
