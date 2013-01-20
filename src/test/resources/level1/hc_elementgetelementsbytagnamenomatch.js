
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
The "getElementsByTagName(name)" method returns a list
of all descendant Elements with the given tag name.

Create a NodeList of all the descendant elements
using the string "employee" as the tagName.
The method should return a NodeList whose length is
"5".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
*/
function hc_elementgetelementsbytagnamenomatch() {
   var success;
    var doc;
      var elementList;
      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("noMatch");
      assertSize("elementGetElementsByTagNameNoMatchNoMatchAssert",0,elementList);

}




function runTest() {
   hc_elementgetelementsbytagnamenomatch();
}
