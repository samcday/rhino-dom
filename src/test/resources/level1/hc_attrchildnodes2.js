
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
Checks Node.childNodes for an attribute with multiple child nodes.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
*/
function hc_attrchildnodes2() {
   var success;
    var doc;
      var acronymList;
      var testNode;
      var attributes;
      var titleAttr;
      var value;
      var textNode;
      var childNodes;
      var retval;
      doc = load("hc_staff");
      acronymList = doc.getElementsByTagName("acronym");
      testNode = acronymList.item(3);
      attributes = testNode.attributes;

      titleAttr = attributes.getNamedItem("title");
      childNodes = titleAttr.childNodes;

      textNode = doc.createTextNode("terday");
      retval = titleAttr.appendChild(textNode);
      assertSize("childNodesSize",2,childNodes);
textNode = childNodes.item(0);
      value = textNode.nodeValue;

      assertEquals("child1IsYes","Yes",value);
       textNode = childNodes.item(1);
      value = textNode.nodeValue;

      assertEquals("child2IsTerday","terday",value);
       textNode = childNodes.item(2);
      assertNull("thirdItemIsNull",textNode);
    
}




function runTest() {
   hc_attrchildnodes2();
}
