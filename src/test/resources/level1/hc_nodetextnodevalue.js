
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
    The string returned by the "getNodeValue()" method for a 
    Text Node is the content of the Text node.
    
    Retrieve the Text node from the last child of the first 
    employee and check the string returned by the 
    "getNodeValue()" method.   It should be equal to 
    "1230 North Ave. Dallas, Texas 98551". 

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
*/
function hc_nodetextnodevalue() {
   var success;
    var doc;
      var elementList;
      var testAddr;
      var textNode;
      var textValue;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testAddr = elementList.item(0);
      textNode = testAddr.firstChild;

      textValue = textNode.nodeValue;

      assertEquals("textNodeValue","1230 North Ave. Dallas, Texas 98551",textValue);
       
}




function runTest() {
   hc_nodetextnodevalue();
}
