function equalsAutoCase(context, expected, actual) {
    if (builder.contentType == "text/html") {
        if (context == "attribute") {
            return expected.toLowerCase() == actual;
        }
        return expected.toUpperCase() == actual;
    }
    return expected == actual;
}