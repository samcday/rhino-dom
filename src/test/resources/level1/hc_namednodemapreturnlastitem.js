
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
    The "item(index)" method returns the indexth item in 
   the map(test for last item). 
   
   Retrieve the second "acronym" and get the attribute name. Since the
   DOM does not specify an order of these nodes the contents
   of the LAST node can contain either "title" or "class".
   The test should return "true" if the LAST node is either
   of these values.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
* @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
*/
function hc_namednodemapreturnlastitem() {
   var success;
    var doc;
      var elementList;
      var testEmployee;
      var attributes;
      var child;
      var nodeName;
      htmlExpected = new Array();
      htmlExpected[0] = "title";
      htmlExpected[1] = "class";

      expected = new Array();
      expected[0] = "title";
      expected[1] = "class";
      expected[2] = "dir";

      var actual = new Array();

      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testEmployee = elementList.item(1);
      attributes = testEmployee.attributes;

      for(var indexN65648 = 0;indexN65648 < attributes.length; indexN65648++) {
      child = attributes.item(indexN65648);
      nodeName = child.nodeName;

      actual[actual.length] = nodeName;

	}
   
	if(
	
	(builder.contentType == "text/html")

	) {
	assertEqualsCollection("attrName_html",toLowerArray(htmlExpected),toLowerArray(actual));
       
	}
	
		else {
			assertEqualsCollection("attrName",expected,actual);
       
		}
	
}




function runTest() {
   hc_namednodemapreturnlastitem();
}
