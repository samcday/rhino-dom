
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
    Retrieve the second acronym element and invoke
    the cloneNode method.   The
    duplicate node returned by the method should copy the
    attributes associated with this node.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
*/
function hc_nodecloneattributescopied() {
   var success;
    var doc;
      var elementList;
      var addressNode;
      var clonedNode;
      var attributes;
      var attributeNode;
      var attributeName;
      var result = new Array();

      htmlExpected = new Array();
      htmlExpected[0] = "class";
      htmlExpected[1] = "title";

      expected = new Array();
      expected[0] = "class";
      expected[1] = "title";
      expected[2] = "dir";

      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      addressNode = elementList.item(1);
      clonedNode = addressNode.cloneNode(false);
      attributes = clonedNode.attributes;

      for(var indexN65654 = 0;indexN65654 < attributes.length; indexN65654++) {
      attributeNode = attributes.item(indexN65654);
      attributeName = attributeNode.nodeName;

      result[result.length] = attributeName;

	}
   
	if(
	
	(builder.contentType == "text/html")

	) {
	assertEqualsCollection("nodeNames_html",toLowerArray(htmlExpected),toLowerArray(result));
       
	}
	
		else {
			assertEqualsCollection("nodeNames",expected,result);
       
		}
	
}




function runTest() {
   hc_nodecloneattributescopied();
}
