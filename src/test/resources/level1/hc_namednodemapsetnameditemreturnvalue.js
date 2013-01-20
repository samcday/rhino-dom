
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
    If the "setNamedItem(arg)" method replaces an already 
   existing node with the same name then the already 
   existing node is returned.
   
   Retrieve the third employee and create a NamedNodeMap 
   object from the attributes of the last child by
   invoking the "getAttributes()" method.  Once the
   list is created an invocation of the "setNamedItem(arg)"
   method is done with arg=newAttr, where newAttr is a
   new Attr Node previously created and whose node name
   already exists in the map.  The "setNamedItem(arg)"
   method should replace the already existing node with
   the new one and return the existing node.   
   This test uses the "createAttribute(name)" method from
   the document interface.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1025163788
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
*/
function hc_namednodemapsetnameditemreturnvalue() {
   var success;
    var doc;
      var elementList;
      var newAttribute;
      var testAddress;
      var attributes;
      var newNode;
      var attrValue;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testAddress = elementList.item(2);
      newAttribute = doc.createAttribute("class");
      attributes = testAddress.attributes;

      newNode = attributes.setNamedItem(newAttribute);
      assertNotNull("previousAttrNotNull",newNode);
attrValue = newNode.nodeValue;

      assertEquals("previousAttrValue","No",attrValue);
       
}




function runTest() {
   hc_namednodemapsetnameditemreturnvalue();
}
