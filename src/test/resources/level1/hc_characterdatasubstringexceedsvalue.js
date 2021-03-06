
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
    If the sum of the "offset" and "count" exceeds the
   "length" then the "substringData(offset,count)" method
   returns all the characters to the end of the data. 
   
   Retrieve the character data from the second child 
   of the first employee and access part of the data 
   by using the substringData(offset,count) method
   with offset=9 and count=10.  The method should return 
   the substring "Martin" since offset+count > length
   (19 > 15).

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
*/
function hc_characterdatasubstringexceedsvalue() {
   var success;
    var doc;
      var elementList;
      var nameNode;
      var child;
      var substring;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("strong");
      nameNode = elementList.item(0);
      child = nameNode.firstChild;

      substring = child.substringData(9,10);
      assertEquals("characterdataSubStringExceedsValueAssert","Martin",substring);
       
}




function runTest() {
   hc_characterdatasubstringexceedsvalue();
}
