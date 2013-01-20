
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
    The "appendData(arg)" method appends a string to the end 
   of the character data of the node.
   
   Retrieve the character data from the second child 
   of the first employee.  The appendData(arg) method is
   called with arg=", Esquire".  The method should append 
   the specified data to the already existing character  
   data.  The new value return by the "getLength()" method
   should be 24.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-32791A2F
*/
function hc_characterdataappenddata() {
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

      child.appendData(", Esquire");
      childValue = child.data;

      childLength = childValue.length;
      assertEquals("characterdataAppendDataAssert",24,childLength);
       
}




function runTest() {
   hc_characterdataappenddata();
}
