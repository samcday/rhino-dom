
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
      return "http://www.w3.org/2001/DOM-Test-Suite/level1/core/hc_documentcreateattribute";
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
   Retrieve the entire DOM document and invoke its 
   "createAttribute(name)" method.  It should create a  
   new Attribute node with the given name. The name, value
   and type of the newly created object are retrieved and
   output.

* @author Curt Arnold
* @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1084891198
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
* @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
* @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
*/
function hc_documentcreateattribute() {
   var success;
    var doc;
      var newAttrNode;
      var attrValue;
      var attrName;
      var attrType;
      
        	doc = document;
        	
      newAttrNode = doc.createAttribute("title");
      attrValue = newAttrNode.nodeValue;

      assertEquals("value","",attrValue);
       attrName = newAttrNode.nodeName;

      assertEqualsAutoCase("attribute", "name","title",attrName);
       attrType = newAttrNode.nodeType;

      assertEquals("type",2,attrType);
       
}




function runTest() {
   hc_documentcreateattribute();
}
