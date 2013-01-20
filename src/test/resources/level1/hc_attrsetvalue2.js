
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
Sets Attr.value on an attribute that should contain multiple child nodes.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-221662474
*/
function hc_attrsetvalue2() {
   var success;
    var doc;
      var acronymList;
      var testNode;
      var attributes;
      var titleAttr;
      var value;
      var textNode;
      var retval;
      var firstChild;
      var otherChild;
      doc = load("hc_staff");
      acronymList = doc.getElementsByTagName("acronym");
      testNode = acronymList.item(3);
      attributes = testNode.attributes;

      titleAttr = attributes.getNamedItem("title");
      textNode = doc.createTextNode("terday");
      retval = titleAttr.appendChild(textNode);
      firstChild = titleAttr.firstChild;

      assertNotNull("attrChildNotNull",firstChild);
titleAttr.value = "Tomorrow";

      firstChild.nodeValue = "impl reused node";

      value = titleAttr.value;

      assertEquals("attrValue","Tomorrow",value);
       value = titleAttr.nodeValue;

      assertEquals("attrNodeValue","Tomorrow",value);
       firstChild = titleAttr.lastChild;

      value = firstChild.nodeValue;

      assertEquals("firstChildValue","Tomorrow",value);
       otherChild = firstChild.nextSibling;

      assertNull("nextSiblingIsNull",otherChild);
    
}




function runTest() {
   hc_attrsetvalue2();
}
