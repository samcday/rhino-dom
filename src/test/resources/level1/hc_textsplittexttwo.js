
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
    After the "splitText(offset)" method breaks the Text node
    into two Text nodes, the original node contains all the
    content up to the offset point.
    
    Retrieve the textual data from the second child of the 
    third employee and invoke the "splitText(offset)" method.
    The original Text node should contain all the content
    up to the offset point.   The "getNodeValue()" method
    is called to check that the original node now contains
    the first five characters.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
*/
function hc_textsplittexttwo() {
   var success;
    var doc;
      var elementList;
      var nameNode;
      var textNode;
      var splitNode;
      var value;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("strong");
      nameNode = elementList.item(2);
      textNode = nameNode.firstChild;

      splitNode = textNode.splitText(5);
      value = textNode.nodeValue;

      assertEquals("textSplitTextTwoAssert","Roger",value);
       
}




function runTest() {
   hc_textsplittexttwo();
}
