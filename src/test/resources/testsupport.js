function equalsAutoCase(context, expected, actual) {
    if (builder.contentType == "text/html") {
        if (context == "attribute") {
            return expected.toLowerCase() == actual;
        }
        return expected.toUpperCase() == actual;
    }
    return expected == actual;
}

function assertEqualsAutoCase(context, descr, expected, actual) {
    if (builder.contentType == "text/html") {
        if(context == "attribute") {
            assertEquals(descr, expected.toLowerCase(), actual.toLowerCase());
        } else {
            assertEquals(descr, expected.toUpperCase(), actual);
        }
    } else {
        assertEquals(descr, expected, actual);
    }
}

function assertEqualsListAutoCase(context, descr, expected, actual) {
    var minLength = expected.length;
    if (actual.length < minLength) {
        minLength = actual.length;
    }
    //
    for(var i = 0; i < minLength; i++) {
        assertEqualsAutoCase(context, descr, expected[i], actual[i]);
    }
    //
    //  if they aren't the same size, they aren't equal
    assertEquals(descr, expected.length, actual.length);
}

function assertEqualsList(descr, expected, actual) {
    var minLength = expected.length;
    if (actual.length < minLength) {
        minLength = actual.length;
    }
    //
    for(var i = 0; i < minLength; i++) {
        if(expected[i] != actual[i]) {
            assertEquals(descr, expected[i], actual[i]);
        }
    }
    //
    //  if they aren't the same size, they aren't equal
    assertEquals(descr, expected.length, actual.length);
}

function assertInstanceOf(descr, type, obj) {
    if(type == "Attr") {
        assertEquals(descr,2,obj.nodeType);
        var specd = obj.specified;
    }
}


function toLowerArray(src) {
    var newArray = new Array();
    var i;
    for (i = 0; i < src.length; i++) {
        newArray[i] = src[i].toLowerCase();
    }
    return newArray;
}


function assertSame(descr, expected, actual) {
    if(expected != actual) {
        assertEquals(descr, expected.nodeType, actual.nodeType);
        assertEquals(descr, expected.nodeValue, actual.nodeValue);
    }
}


function assertEqualsCollectionAutoCase(context, descr, expected, actual) {
    //
    //  if they aren't the same size, they aren't equal
    assertEquals(descr, expected.length, actual.length);

    //
    //  if there length is the same, then every entry in the expected list
    //     must appear once and only once in the actual list
    var expectedLen = expected.length;
    var expectedValue;
    var actualLen = actual.length;
    var i;
    var j;
    var matches;
    for(i = 0; i < expectedLen; i++) {
        matches = 0;
        expectedValue = expected[i];
        for(j = 0; j < actualLen; j++) {
            if (builder.contentType == "text/html") {
                if (context == "attribute") {
                    if (expectedValue.toLowerCase() == actual[j].toLowerCase()) {
                        matches++;
                    }
                } else {
                    if (expectedValue.toUpperCase() == actual[j]) {
                        matches++;
                    }
                }
            } else {
                if(expectedValue == actual[j]) {
                    matches++;
                }
            }
        }
        if(matches == 0) {
            assert(descr + ": No match found for " + expectedValue,false);
        }
        if(matches > 1) {
            assert(descr + ": Multiple matches found for " + expectedValue, false);
        }
    }
}

function assertEqualsCollection(descr, expected, actual) {
    //
    //  if they aren't the same size, they aren't equal
    assertEquals(descr, expected.length, actual.length);
    //
    //  if there length is the same, then every entry in the expected list
    //     must appear once and only once in the actual list
    var expectedLen = expected.length;
    var expectedValue;
    var actualLen = actual.length;
    var i;
    var j;
    var matches;
    for(i = 0; i < expectedLen; i++) {
        matches = 0;
        expectedValue = expected[i];
        for(j = 0; j < actualLen; j++) {
            if(expectedValue == actual[j]) {
                matches++;
            }
        }
        if(matches == 0) {
            assert(descr + ": No match found for " + expectedValue,false);
        }
        if(matches > 1) {
            assert(descr + ": Multiple matches found for " + expectedValue, false);
        }
    }
}
