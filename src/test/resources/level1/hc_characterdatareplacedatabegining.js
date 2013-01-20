
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
The "replaceData(offset,count,arg)" method replaces the
characters starting at the specified offset with the
specified string.  Test for replacement in the
middle of the data.

Retrieve the character data from the last child of the
first employee.  The "replaceData(offset,count,arg)"
method is then called with offset=5 and count=5 and
arg="South".  The method should replace characters five
thru 9 of the character data with "South".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
*/
function hc_characterdatareplacedatabegining() {
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

      child.replaceData(0,4,"2500");
      childData = child.data;

      assertEquals("characterdataReplaceDataBeginingAssert","2500 North Ave. Dallas, Texas 98551",childData);
       
}




function runTest() {
   hc_characterdatareplacedatabegining();
}
