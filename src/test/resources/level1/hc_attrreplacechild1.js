
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
Replaces a text node of an attribute and checks if the value of
the attribute is changed.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
*/
function hc_attrreplacechild1() {
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
      doc = load("hc_staff");
      acronymList = doc.getElementsByTagName("acronym");
      testNode = acronymList.item(3);
      attributes = testNode.attributes;

      titleAttr = attributes.getNamedItem("title");
      textNode = doc.createTextNode("terday");
      firstChild = titleAttr.firstChild;

      assertNotNull("attrChildNotNull",firstChild);
retval = titleAttr.replaceChild(textNode,firstChild);
      value = titleAttr.value;

      assertEquals("attrValue","terday",value);
       value = titleAttr.nodeValue;

      assertEquals("attrNodeValue","terday",value);
       value = retval.nodeValue;

      assertEquals("retvalValue","Yes",value);
       firstChild = titleAttr.firstChild;

      value = firstChild.nodeValue;

      assertEquals("firstChildValue","terday",value);
       
}




function runTest() {
   hc_attrreplacechild1();
}
