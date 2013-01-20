
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
Append a couple of text nodes to the first sup element, normalize the
document element and check that the element has been normalized.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-162CF083
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=546
*/
function hc_elementnormalize() {
   var success;
    var doc;
      var root;
      var elementList;
      var testName;
      var firstChild;
      var childValue;
      var textNode;
      var retNode;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("sup");
      testName = elementList.item(0);
      textNode = doc.createTextNode("");
      retNode = testName.appendChild(textNode);
      textNode = doc.createTextNode(",000");
      retNode = testName.appendChild(textNode);
      root = doc.documentElement;

      root.normalize();
      elementList = doc.getElementsByTagName("sup");
      testName = elementList.item(0);
      firstChild = testName.firstChild;

      childValue = firstChild.nodeValue;

      assertEquals("elementNormalizeAssert","56,000,000",childValue);
       
}




function runTest() {
   hc_elementnormalize();
}
