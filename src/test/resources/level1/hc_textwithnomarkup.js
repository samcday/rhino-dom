
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
    If there is not any markup inside an Element or Attr node
    content, then the text is contained in a single object   
    implementing the Text interface that is the only child
    of the element.
    
    Retrieve the textual data from the second child of the 
    third employee.   That Text node contains a block of 
    multiple text lines without markup, so they should be
    treated as a single Text node.   The "getNodeValue()"    
    method should contain the combination of the two lines.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1312295772
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
*/
function hc_textwithnomarkup() {
   var success;
    var doc;
      var elementList;
      var nameNode;
      var nodeV;
      var value;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("strong");
      nameNode = elementList.item(2);
      nodeV = nameNode.firstChild;

      value = nodeV.nodeValue;

      assertEquals("textWithNoMarkupAssert","Roger\n Jones",value);
       
}




function runTest() {
   hc_textwithnomarkup();
}
