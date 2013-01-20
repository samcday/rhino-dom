
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
  Create a new DocumentFragment and add a newly created Element node(with one attribute).  
  Once the element is added, its attribute should be available as an attribute associated 
  with an Element within a DocumentFragment.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-35CB04B5
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
* @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
*/
function hc_attrcreatedocumentfragment() {
   var success;
    var doc;
      var docFragment;
      var newOne;
      var domesticNode;
      var attributes;
      var attribute;
      var attrName;
      var appendedChild;
      var langAttrCount = 0;
      doc = load("hc_staff");
      docFragment = doc.createDocumentFragment();
      newOne = doc.createElement("html");
      newOne.setAttribute("lang","EN");
      appendedChild = docFragment.appendChild(newOne);
      domesticNode = docFragment.firstChild;

      attributes = domesticNode.attributes;

      for(var indexN65656 = 0;indexN65656 < attributes.length; indexN65656++) {
      attribute = attributes.item(indexN65656);
      attrName = attribute.nodeName;

      
	if(
	equalsAutoCase("attribute", "lang", attrName)
	) {
	langAttrCount += 1;

	}
	
	}
   assertEquals("hasLangAttr",1,langAttrCount);
       
}




function runTest() {
   hc_attrcreatedocumentfragment();
}
