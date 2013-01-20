
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
    The "createDocumentFragment()" method creates an empty 
   DocumentFragment object.
   Retrieve the entire DOM document and invoke its 
   "createDocumentFragment()" method.  The content, name, 
   type and value of the newly created object are output.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-35CB04B5
*/
function hc_documentcreatedocumentfragment() {
   var success;
    var doc;
      var newDocFragment;
      var children;
      var length;
      var newDocFragmentName;
      var newDocFragmentType;
      var newDocFragmentValue;
      doc = load("hc_staff");
      newDocFragment = doc.createDocumentFragment();
      children = newDocFragment.childNodes;

      length = children.length;

      assertEquals("length",0,length);
       newDocFragmentName = newDocFragment.nodeName;

      assertEquals("strong","#document-fragment",newDocFragmentName);
       newDocFragmentType = newDocFragment.nodeType;

      assertEquals("type",11,newDocFragmentType);
       newDocFragmentValue = newDocFragment.nodeValue;

      assertNull("value",newDocFragmentValue);
    
}




function runTest() {
   hc_documentcreatedocumentfragment();
}
