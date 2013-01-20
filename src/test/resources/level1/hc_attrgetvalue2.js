
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
Checks the value of an attribute that contains entity references.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-221662474
*/
function hc_attrgetvalue2() {
   var success;
    var doc;
      var acronymList;
      var testNode;
      var attributes;
      var titleAttr;
      var value;
      var textNode;
      var retval;
      var firstChild;
      var alphaRef;
      doc = load("hc_staff");
      acronymList = doc.getElementsByTagName("acronym");
      testNode = acronymList.item(3);
      attributes = testNode.attributes;

      titleAttr = attributes.getNamedItem("class");
      
	if(
	
	(builder.contentType == "text/html")

	) {
	
	{
		success = false;
		try {
            alphaRef = doc.createEntityReference("alpha");
        }
		catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
		}
		assertTrue("throw_NOT_SUPPORTED_ERR",success);
	}

	}
	
		else {
			alphaRef = doc.createEntityReference("alpha");
      firstChild = titleAttr.firstChild;

      retval = titleAttr.insertBefore(alphaRef,firstChild);
      value = titleAttr.value;

      assertEquals("attrValue1","αYα",value);
       
		}
	
}




function runTest() {
   hc_attrgetvalue2();
}
