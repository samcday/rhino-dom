
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
    Document Node is null.

    Retrieve the DOM Document and check the string returned
    by the "getNodeValue()" method.   It should be equal to 
    null. 


* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
*/
function hc_nodedocumentnodevalue() {
   var success;
    var doc;
      var documentValue;
      doc = load("hc_staff");
      documentValue = doc.nodeValue;

      assertNull("documentNodeValue",documentValue);
    
}




function runTest() {
   hc_nodedocumentnodevalue();
}
