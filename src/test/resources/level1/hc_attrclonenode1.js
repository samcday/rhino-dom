
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
Appends a text node to an attribute and clones the node.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
*/
function hc_attrclonenode1() {
   var success;
    var doc;
      var acronymList;
      var testNode;
      var attributes;
      var titleAttr;
      var value;
      var textNode;
      var retval;
      var lastChild;
      var clonedTitle;
      doc = load("hc_staff");
      acronymList = doc.getElementsByTagName("acronym");
      testNode = acronymList.item(3);
      attributes = testNode.attributes;

      titleAttr = attributes.getNamedItem("title");
      textNode = doc.createTextNode("terday");
      retval = titleAttr.appendChild(textNode);
      clonedTitle = titleAttr.cloneNode(false);
      textNode.nodeValue = "text_node_not_cloned";

      value = clonedTitle.value;

      assertEquals("attrValue","Yesterday",value);
       value = clonedTitle.nodeValue;

      assertEquals("attrNodeValue","Yesterday",value);
       lastChild = clonedTitle.lastChild;

      value = lastChild.nodeValue;

      assertEquals("lastChildValue","terday",value);
       
}




function runTest() {
   hc_attrclonenode1();
}
