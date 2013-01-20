
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
Add an empty text node to an existing attribute node, normalize the containing element
and check that the attribute node has eliminated the empty text.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-162CF083
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=482
*/
function hc_elementnormalize2() {
   var success;
    var doc;
      var root;
      var elementList;
      var element;
      var firstChild;
      var secondChild;
      var childValue;
      var emptyText;
      var attrNode;
      var retval;
      doc = load("hc_staff");
      root = doc.documentElement;

      emptyText = doc.createTextNode("");
      elementList = root.getElementsByTagName("acronym");
      element = elementList.item(0);
      attrNode = element.getAttributeNode("title");
      retval = attrNode.appendChild(emptyText);
      element.normalize();
      attrNode = element.getAttributeNode("title");
      firstChild = attrNode.firstChild;

      childValue = firstChild.nodeValue;

      assertEquals("firstChild","Yes",childValue);
       secondChild = firstChild.nextSibling;

      assertNull("secondChildNull",secondChild);
    
}




function runTest() {
   hc_elementnormalize2();
}
