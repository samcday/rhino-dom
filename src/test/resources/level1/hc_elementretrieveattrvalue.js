
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
    The "getAttribute(name)" method returns an attribute
   value by name.
   
   Retrieve the second address element, then
   invoke the 'getAttribute("class")' method.  This should
   return the value of the attribute("No").

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-666EE0F9
*/
function hc_elementretrieveattrvalue() {
   var success;
    var doc;
      var elementList;
      var testAddress;
      var attrValue;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testAddress = elementList.item(2);
      attrValue = testAddress.getAttribute("class");
      assertEquals("attrValue","No",attrValue);
       
}




function runTest() {
   hc_elementretrieveattrvalue();
}
