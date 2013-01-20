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
