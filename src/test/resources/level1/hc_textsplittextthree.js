
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
    into two Text nodes, the new Text node contains all the
    content at and after the offset point.
    
    Retrieve the textual data from the second child of the 
    third employee and invoke the "splitText(offset)" method.
    The new Text node should contain all the content
    at and after the offset point.   The "getNodeValue()"
    method is called to check that the new node now contains
    the characters at and after position seven.
    (Starting count at 0)

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
*/
function hc_textsplittextthree() {
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

      splitNode = textNode.splitText(6);
      value = splitNode.nodeValue;

      assertEquals("textSplitTextThreeAssert"," Jones",value);
       
}




function runTest() {
   hc_textsplittextthree();
}
