
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
Removes the child node of an attribute and checks that the value is empty.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
*/
function hc_attrremovechild1() {
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
      textNode = titleAttr.firstChild;

      assertNotNull("attrChildNotNull",textNode);
retval = titleAttr.removeChild(textNode);
      value = titleAttr.value;

      assertEquals("attrValue","",value);
       value = titleAttr.nodeValue;

      assertEquals("attrNodeValue","",value);
       value = retval.nodeValue;

      assertEquals("retvalValue","Yes",value);
       firstChild = titleAttr.firstChild;

      assertNull("firstChildNull",firstChild);
    
}




function runTest() {
   hc_attrremovechild1();
}
