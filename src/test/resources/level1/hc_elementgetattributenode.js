
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
   Retrieve the attribute "title" from the last child
   of the first "p" element and check its node name.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-217A91B8
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
* @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
*/
function hc_elementgetattributenode() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var domesticAttr;
      var nodeName;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(0);
      domesticAttr = testEmployee.getAttributeNode("title");
      nodeName = domesticAttr.nodeName;

      assertEqualsAutoCase("attribute", "nodeName","title",nodeName);
       
}




function runTest() {
   hc_elementgetattributenode();
}
