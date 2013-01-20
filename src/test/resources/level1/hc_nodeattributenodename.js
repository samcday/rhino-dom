
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
    Retrieve the Attribute named "title" from the last 
    child of the first p element and check the string returned 
    by the "getNodeName()" method.   It should be equal to 
    "title". 

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
*/
function hc_nodeattributenodename() {
   var success;
    var doc;
      var elementList;
      var testAddr;
      var addrAttr;
      var attrName;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testAddr = elementList.item(0);
      addrAttr = testAddr.getAttributeNode("title");
      attrName = addrAttr.nodeName;

      assertEqualsAutoCase("attribute", "nodeName","title",attrName);
       
}




function runTest() {
   hc_nodeattributenodename();
}
