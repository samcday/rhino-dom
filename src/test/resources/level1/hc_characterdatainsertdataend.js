
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
    The "insertData(offset,arg)" method will insert a string 
   at the specified character offset.  Insert the data at 
   the end of the character data. 
   
   Retrieve the character data from the second child of  
   the first employee.  The "insertData(offset,arg)"
   method is then called with offset=15 and arg=", Esquire".
   The method should insert the string ", Esquire" at 
   position 15.  The new value of the character data should
   be "Margaret Martin, Esquire".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3EDB695F
*/
function hc_characterdatainsertdataend() {
   var success;
    var doc;
      var elementList;
      var nameNode;
      var child;
      var childData;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("strong");
      nameNode = elementList.item(0);
      child = nameNode.firstChild;

      child.insertData(15,", Esquire");
      childData = child.data;

      assertEquals("characterdataInsertDataEndAssert","Margaret Martin, Esquire",childData);
       
}




function runTest() {
   hc_characterdatainsertdataend();
}
