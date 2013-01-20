
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
  Retrieve the attribute named class from the last 
  child of of the second "p" element and examine its 
  NodeName.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1112119403
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
* @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
*/
function hc_attrname() {
   var success;
    var doc;
      var addressList;
      var testNode;
      var attributes;
      var streetAttr;
      var strong1;
      var strong2;
      doc = load("hc_staff");
      addressList = doc.getElementsByTagName("acronym");
      testNode = addressList.item(1);
      attributes = testNode.attributes;

      streetAttr = attributes.getNamedItem("class");
      strong1 = streetAttr.nodeName;

      strong2 = streetAttr.name;

      assertEqualsAutoCase("attribute", "nodeName","class",strong1);
       assertEqualsAutoCase("attribute", "name","class",strong2);
       
}




function runTest() {
   hc_attrname();
}
