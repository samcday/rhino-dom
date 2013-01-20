
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
    Retrieve the third "acronym" element and evaluate Node.attributes.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
* @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
*/
function hc_nodeelementnodeattributes() {
   var success;
    var doc;
      var elementList;
      var testAddr;
      var addrAttr;
      var attrNode;
      var attrName;
      var attrList = new Array();

      htmlExpected = new Array();
      htmlExpected[0] = "title";
      htmlExpected[1] = "class";

      expected = new Array();
      expected[0] = "title";
      expected[1] = "class";
      expected[2] = "dir";

      doc = load("hc_staff");
      elementList = doc.getElementsByTagName("acronym");
      testAddr = elementList.item(2);
      addrAttr = testAddr.attributes;

      for(var indexN65648 = 0;indexN65648 < addrAttr.length; indexN65648++) {
      attrNode = addrAttr.item(indexN65648);
      attrName = attrNode.nodeName;

      attrList[attrList.length] = attrName;

	}
   
	if(
	
	(builder.contentType == "text/html")

	) {
	assertEqualsCollection("attrNames_html",toLowerArray(htmlExpected),toLowerArray(attrList));
       
	}
	
		else {
			assertEqualsCollection("attrNames",expected,attrList);
       
		}
	
}




function runTest() {
   hc_nodeelementnodeattributes();
}
