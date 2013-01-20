
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
Creates an new attribute node and appends a text node.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
*/
function hc_attrappendchild6() {
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
      doc = load("hc_staff");
      titleAttr = doc.createAttribute("title");
      textNode = doc.createTextNode("Yesterday");
      retval = titleAttr.appendChild(textNode);
      value = titleAttr.value;

      assertEquals("attrValue","Yesterday",value);
       value = titleAttr.nodeValue;

      assertEquals("attrNodeValue","Yesterday",value);
       value = retval.nodeValue;

      assertEquals("retvalValue","Yesterday",value);
       lastChild = titleAttr.lastChild;

      value = lastChild.nodeValue;

      assertEquals("lastChildValue","Yesterday",value);
       
}




function runTest() {
   hc_attrappendchild6();
}
