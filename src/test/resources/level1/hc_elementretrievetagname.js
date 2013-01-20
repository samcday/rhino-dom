
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
    The "getElementsByTagName()" method returns a NodeList 
   of all descendant elements with a given tagName.    
   
   Invoke the "getElementsByTagName()" method and create
   a NodeList of "code" elements.  Retrieve the second 
   "code" element in the list and return the NodeName. 

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-104682815
*/
function hc_elementretrievetagname() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var strong;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("code");
      testEmployee = elementList.item(1);
      strong = testEmployee.nodeName;

      assertEqualsAutoCase("element", "nodename","code",strong);
       strong = testEmployee.tagName;

      assertEqualsAutoCase("element", "tagname","code",strong);
       
}




function runTest() {
   hc_elementretrievetagname();
}
