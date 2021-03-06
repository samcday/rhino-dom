
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
The "deleteData(offset,count)" method removes a range of
characters from the node.  Delete data at the beginning
of the character data.

Retrieve the character data from the last child of the
first employee.  The "deleteData(offset,count)"
method is then called with offset=0 and count=16.
The method should delete the characters from position
0 thru position 16.  The new value of the character data
should be "Dallas, Texas 98551".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
*/
function hc_characterdatadeletedatabegining() {
   var success;
    var doc;
      var elementList;
      var nameNode;
      var child;
      var childData;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      nameNode = elementList.item(0);
      child = nameNode.firstChild;

      child.deleteData(0,16);
      childData = child.data;

      assertEquals("data","Dallas, Texas 98551",childData);
       
}




function runTest() {
   hc_characterdatadeletedatabegining();
}
