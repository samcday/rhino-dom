
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
Appends a document fragment to an attribute and checks if the value of
the attribute is changed.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
*/
function hc_attrinsertbefore3() {
   var success;
    var doc;
      var acronymList;
      var testNode;
      var attributes;
      var titleAttr;
      var value;
      var terNode;
      var dayNode;
      var docFrag;
      var retval;
      var firstChild;
      var lastChild;
      var refChild = null;

      doc = load("hc_staff");
      acronymList = doc.getElementsByTagName("acronym");
      testNode = acronymList.item(3);
      attributes = testNode.attributes;

      titleAttr = attributes.getNamedItem("title");
      terNode = doc.createTextNode("ter");
      dayNode = doc.createTextNode("day");
      docFrag = doc.createDocumentFragment();
      retval = docFrag.appendChild(terNode);
      retval = docFrag.appendChild(dayNode);
      retval = titleAttr.insertBefore(docFrag,refChild);
      value = titleAttr.value;

      assertEquals("attrValue","Yesterday",value);
       value = titleAttr.nodeValue;

      assertEquals("attrNodeValue","Yesterday",value);
       value = retval.nodeValue;

      assertNull("retvalValue",value);
    firstChild = titleAttr.firstChild;

      value = firstChild.nodeValue;

      assertEquals("firstChildValue","Yes",value);
       lastChild = titleAttr.lastChild;

      value = lastChild.nodeValue;

      assertEquals("lastChildValue","day",value);
       
}




function runTest() {
   hc_attrinsertbefore3();
}
