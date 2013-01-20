
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
    The "createTextNode(data)" method creates a Text node 
   given the specfied string.
   Retrieve the entire DOM document and invoke its 
   "createTextNode(data)" method.  It should create a 
   new Text node whose "data" is the specified string.
   The NodeName and NodeType are also checked.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1975348127
*/
function hc_documentcreatetextnode() {
   var success;
    var doc;
      var newTextNode;
      var newTextName;
      var newTextValue;
      var newTextType;
      doc = load("hc_staff");
      newTextNode = doc.createTextNode("This is a new Text node");
      newTextValue = newTextNode.nodeValue;

      assertEquals("value","This is a new Text node",newTextValue);
       newTextName = newTextNode.nodeName;

      assertEquals("strong","#text",newTextName);
       newTextType = newTextNode.nodeType;

      assertEquals("type",3,newTextType);
       
}




function runTest() {
   hc_documentcreatetextnode();
}
