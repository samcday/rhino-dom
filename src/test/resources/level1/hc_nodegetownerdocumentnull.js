
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

    The "getOwnerDocument()" method returns null if the target

    node itself is a document.

    

    Invoke the "getOwnerDocument()" method on the master 

    document.   The Document returned should be null.


* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#node-ownerDoc
*/
function hc_nodegetownerdocumentnull() {
   var success;
    var doc;
      var ownerDocument;
      doc = load("hc_staff");
      ownerDocument = doc.ownerDocument;

      assertNull("nodeGetOwnerDocumentNullAssert1",ownerDocument);
    
}




function runTest() {
   hc_nodegetownerdocumentnull();
}
