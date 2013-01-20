
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
    The "createComment(data)" method creates a new Comment
   node given the specified string. 
   Retrieve the entire DOM document and invoke its 
   "createComment(data)" method.  It should create a new
   Comment node whose "data" is the specified string.
   The content, name and type are retrieved and output.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1334481328
*/
function hc_documentcreatecomment() {
   var success;
    var doc;
      var newCommentNode;
      var newCommentValue;
      var newCommentName;
      var newCommentType;
      doc = load("hc_staff");
      newCommentNode = doc.createComment("This is a new Comment node");
      newCommentValue = newCommentNode.nodeValue;

      assertEquals("value","This is a new Comment node",newCommentValue);
       newCommentName = newCommentNode.nodeName;

      assertEquals("strong","#comment",newCommentName);
       newCommentType = newCommentNode.nodeType;

      assertEquals("type",8,newCommentType);
       
}




function runTest() {
   hc_documentcreatecomment();
}
