
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
    The "setAttributeNode(newAttr)" method adds a new
   attribute to the Element.  If the "newAttr" Attr node is
   already present in this element, it should replace the
   existing one. 
   
   Retrieve the last child of the third employee and add a 
   new attribute node by invoking the "setAttributeNode(new 
   Attr)" method.  The new attribute node to be added is 
   "class", which is already present in this element.  The
   method should replace the existing Attr node with the 
   new one.  This test uses the "createAttribute(name)"
   method from the Document interface. 

* @author Curt Arnold
*/
function hc_elementreplaceexistingattribute() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var newAttribute;
      var strong;
      var setAttr;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(2);
      newAttribute = doc.createAttribute("class");
      setAttr = testEmployee.setAttributeNode(newAttribute);
      strong = testEmployee.getAttribute("class");
      assertEquals("replacedValue","",strong);
       
}




function runTest() {
   hc_elementreplaceexistingattribute();
}
