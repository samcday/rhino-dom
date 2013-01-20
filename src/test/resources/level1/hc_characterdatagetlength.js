
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
    The "getLength()" method returns the number of characters 
  stored in this nodes data.
  Retrieve the character data from the second 
  child of the first employee and examine the 
  value returned by the getLength() method.  

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7D61178C
*/
function hc_characterdatagetlength() {
   var success;
    var doc;
      var elementList;
      var nameNode;
      var child;
      var childValue;
      var childLength;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("strong");
      nameNode = elementList.item(0);
      child = nameNode.firstChild;

      childValue = child.data;

      childLength = childValue.length;
      assertEquals("characterdataGetLengthAssert",15,childLength);
       
}




function runTest() {
   hc_characterdatagetlength();
}
