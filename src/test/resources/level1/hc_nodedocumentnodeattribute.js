
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
The "getAttributes()" method invoked on a Document
Node returns null.

Retrieve the DOM Document and invoke the
"getAttributes()" method on the Document Node.
It should return null.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
*/
function hc_nodedocumentnodeattribute() {
   var success;
    var doc;
      var attrList;
      doc = load("hc_staff");
      attrList = doc.attributes;

      assertNull("doc_attributes_is_null",attrList);
    
}




function runTest() {
   hc_nodedocumentnodeattribute();
}
