
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
    *  Gets URI that identifies the test.
    *  @return uri identifier of test
    */
function getTargetURI() {
      return "http://www.w3.org/2001/DOM-Test-Suite/level1/core/hc_nodecommentnodename";
   }

var docsLoaded = -1000000;
var builder = null;

//
//   This function is called by the testing framework before
//      running the test suite.
//
//   If there are no configuration exceptions, asynchronous
//        document loading is started.  Otherwise, the status
//        is set to complete and the exception is immediately
//        raised when entering the body of the test.
//
function setUpPage() {
   setUpPageStatus = 'running';
   try {
     //
     //   creates test document builder, may throw exception
     //
     builder = createConfiguredBuilder();

      docsLoaded = 0;
      
      var docRef = null;
      if (typeof(this.doc) != 'undefined') {
        docRef = this.doc;
      }
      docsLoaded += preload(docRef, "doc", "hc_staff");
        
       if (docsLoaded == 1) {
          setUpPageStatus = 'complete';
       }
    } catch(ex) {
    	catchInitializationError(builder, ex);
        setUpPageStatus = 'complete';
    }
}



//
//   This method is called on the completion of 
//      each asychronous load started in setUpTests.
//
//   When every synchronous loaded document has completed,
//      the page status is changed which allows the
//      body of the test to be executed.
function loadComplete() {
    if (++docsLoaded == 1) {
        setUpPageStatus = 'complete';
    }
}


/**
* 
    The string returned by the "getNodeName()" method for a 
    Comment Node is "#comment".
    
    Retrieve the Comment node in the XML file 
    and check the string returned by the "getNodeName()" 
    method.   It should be equal to "#comment".

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
*/
function hc_nodecommentnodename() {
   var success;
    var doc;
      var elementList;
      var commentNode;
      var nodeType;
      var commentName;
      var commentNodeName;
      
        	doc = document;
        	
      elementList = doc.childNodes;

      for(var indexN65604 = 0;indexN65604 < elementList.length; indexN65604++) {
      commentNode = elementList.item(indexN65604);
      nodeType = commentNode.nodeType;

      
	if(
	(8 == nodeType)
	) {
	commentNodeName = commentNode.nodeName;

      assertEquals("existingNodeName","#comment",commentNodeName);
       
	}
	
	}
   commentNode = doc.createComment("This is a comment");
      commentNodeName = commentNode.nodeName;

      assertEquals("createdNodeName","#comment",commentNodeName);
       
}




function runTest() {
   hc_nodecommentnodename();
}