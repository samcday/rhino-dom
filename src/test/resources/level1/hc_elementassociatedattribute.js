
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
   Retrieve the first attribute from the last child of
   the first employee and invoke the "getSpecified()" 
   method.  This test is only intended to show that   
   Elements can actually have attributes.  This test uses  
   the "getNamedItem(name)" method from the NamedNodeMap
   interface.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
*/
function hc_elementassociatedattribute() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var attributes;
      var domesticAttr;
      var specified;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(0);
      attributes = testEmployee.attributes;

      domesticAttr = attributes.getNamedItem("title");
      specified = domesticAttr.specified;

      assertTrue("acronymTitleSpecified",specified);

}




function runTest() {
   hc_elementassociatedattribute();
}
