
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
    DocumentFragment Node is "#document-frament".

    Retrieve the DOM document and invoke the
    "createDocumentFragment()" method and check the string      
    returned by the "getNodeName()" method.   It should be 
    equal to "#document-fragment".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
*/
function hc_nodedocumentfragmentnodename() {
   var success;
    var doc;
      var docFragment;
      var documentFragmentName;
      doc = load("hc_staff");
      docFragment = doc.createDocumentFragment();
      documentFragmentName = docFragment.nodeName;

      assertEquals("nodeDocumentFragmentNodeNameAssert1","#document-fragment",documentFragmentName);
       
}




function runTest() {
   hc_nodedocumentfragmentnodename();
}
