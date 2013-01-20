
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
The "getElementsByTagName(name)" method may use the
special value "*" to match all tags in the element
tree.

Create a NodeList of all the descendant elements
of the last employee by using the special value "*".
The method should return all the descendant children(6)
in the order the children were encountered.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
*/
function hc_elementgetelementsbytagnamespecialvalue() {
   var success;
    var doc;
      var elementList;
      var lastEmployee;
      var lastempList;
      var child;
      var childName;
      var result = new Array();

      expectedResult = new Array();
      expectedResult[0] = "em";
      expectedResult[1] = "strong";
      expectedResult[2] = "code";
      expectedResult[3] = "sup";
      expectedResult[4] = "var";
      expectedResult[5] = "acronym";

      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("p");
      lastEmployee = elementList.item(4);
      lastempList = lastEmployee.getElementsByTagName("*");
      for(var indexN65639 = 0;indexN65639 < lastempList.length; indexN65639++) {
      child = lastempList.item(indexN65639);
      childName = child.nodeName;

      result[result.length] = childName;

	}
   assertEqualsListAutoCase("element", "tagNames",expectedResult,result);
       
}




function runTest() {
   hc_elementgetelementsbytagnamespecialvalue();
}
