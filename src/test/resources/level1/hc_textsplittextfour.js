
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
    The "splitText(offset)" method returns the new Text node.
    
    Retrieve the textual data from the last child of the 
    first employee and invoke the "splitText(offset)" method.
    The method should return the new Text node.   The offset
    value used for this test is 30.   The "getNodeValue()"
    method is called to check that the new node now contains
    the characters at and after position 30.
    (Starting count at 0)

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
*/
function hc_textsplittextfour() {
   var success;
    var doc;
      var elementList;
      var addressNode;
      var textNode;
      var splitNode;
      var value;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      addressNode = elementList.item(0);
      textNode = addressNode.firstChild;

      splitNode = textNode.splitText(30);
      value = splitNode.nodeValue;

      assertEquals("textSplitTextFourAssert","98551",value);
       
}




function runTest() {
   hc_textsplittextfour();
}
