/* document.getElementById('formatBtn').addEventListener('click', function() {
    const inputJSON = document.getElementById('inputJSON').value;
    try {
        const parsedJSON = JSON.parse(inputJSON);
        document.getElementById('outputJSON').value = JSON.stringify(parsedJSON, null, 2);
    } catch (error) {
        // Extracting line and position information from the error message
        const match = /position (\d+)/.exec(error.message);
        if (match) {
            const position = parseInt(match[1], 10);
            document.getElementById('outputJSON').value = `Invalid JSON input at position ${position}.`;
        } else {
            // Fallback error message if the position can't be extracted
            document.getElementById('outputJSON').value = "Invalid JSON input.";
        }
    }
});
 */
document.getElementById('formatBtn').addEventListener('click', function() {
    const inputJSON = document.getElementById('inputJSON').value;
    try {
        const parsedJSON = jsonlint.parse(inputJSON);
        console.log(jsonlint.parse(inputJSON));
        document.getElementById('outputJSON').value = JSON.stringify(parsedJSON, null, 2);
    } catch (error) {
        document.getElementById('outputJSON').value = "Invalid JSON: " + error.message;
    }
});

document.getElementById('minifyBtn').addEventListener('click', function() {
    const inputJSON = document.getElementById('inputJSON').value;
    try {
        const parsedJSON = JSON.parse(inputJSON);
        // Stringify without indentation to minify
        const minifiedJSON = JSON.stringify(parsedJSON);
        document.getElementById('outputJSON').value = minifiedJSON;
    } catch (error) {
        document.getElementById('outputJSON').value = "Invalid JSON input.";
    }
});

