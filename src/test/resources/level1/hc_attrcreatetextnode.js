
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
    The "setValue()" method for an attribute creates a 
  Text node with the unparsed content of the string.
  Retrieve the attribute named "class" from the last 
  child of of the fourth employee and assign the "Y&ent1;" 
  string to its value attribute.  This value is not yet
  parsed and therefore should still be the same upon
  retrieval. This test uses the "getNamedItem(name)" method
  from the NamedNodeMap interface.  

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-221662474
* @see http://lists.w3.org/Archives/Public/www-dom-ts/2002Apr/0057.html
*/
function hc_attrcreatetextnode() {
   var success;
    var doc;
      var addressList;
      var testNode;
      var attributes;
      var streetAttr;
      var value;
      doc = load("hc_staff");
      addressList = doc.getElementsByTagName("acronym");
      testNode = addressList.item(3);
      attributes = testNode.attributes;

      streetAttr = attributes.getNamedItem("class");
      streetAttr.value = "Y&ent1;";

      value = streetAttr.value;

      assertEquals("value","Y&ent1;",value);
       value = streetAttr.nodeValue;

      assertEquals("nodeValue","Y&ent1;",value);
       
}




function runTest() {
   hc_attrcreatetextnode();
}
