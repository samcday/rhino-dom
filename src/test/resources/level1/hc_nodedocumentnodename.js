
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
    The string returned by the "getNodeName()" method for a 
    Document Node is "#document".

    Retrieve the DOM document and check the string returned
    by the "getNodeName()" method.   It should be equal to 
    "#document".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
*/
function hc_nodedocumentnodename() {
   var success;
    var doc;
      var documentName;
      doc = load("hc_staff");
      documentName = doc.nodeName;

      assertEquals("documentNodeName","#document",documentName);
       
}




function runTest() {
   hc_nodedocumentnodename();
}
