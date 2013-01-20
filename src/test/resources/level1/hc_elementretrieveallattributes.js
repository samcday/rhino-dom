
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
   Create a list of all the attributes of the last child
   of the first "p" element by using the "getAttributes()"
   method.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
* @see http://lists.w3.org/Archives/Public/www-dom-ts/2002Mar/0002.html
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
*/
function hc_elementretrieveallattributes() {
   var success;
    var doc;
      var addressList;
      var testAddress;
      var attributes;
      var attribute;
      var attributeName;
      var actual = new Array();

      htmlExpected = new Array();
      htmlExpected[0] = "title";

      expected = new Array();
      expected[0] = "title";
      expected[1] = "dir";

      doc = load("hc_staff");
      addressList = doc.getElementsByTagName("acronym");
      testAddress = addressList.item(0);
      attributes = testAddress.attributes;

      for(var indexN65643 = 0;indexN65643 < attributes.length; indexN65643++) {
      attribute = attributes.item(indexN65643);
      attributeName = attribute.nodeName;

      actual[actual.length] = attributeName;

	}
   
	if(
	
	(builder.contentType == "text/html")

	) {
	assertEqualsCollection("htmlAttributeNames",toLowerArray(htmlExpected),toLowerArray(actual));
       
	}
	
		else {
			assertEqualsCollection("attributeNames",toLowerArray(expected),toLowerArray(actual));
       
		}
	
}




function runTest() {
   hc_elementretrieveallattributes();
}
