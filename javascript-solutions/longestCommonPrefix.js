/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // Create variable for prefix
    var longestPrefix = "";
    // Create variable for char index
    var charIndex = 0;

    // Create boolean for end of a word
    var sameChar = true;

    // While boolean variable is false
    while (sameChar === true) {
        //  Loop through the array of strings
        var currentChar = "";
        for (var i=0; i<strs.length; i++) {
            // //  Check if each the current char matches char at charIndex
            if (currentChar === "") {
                currentChar += strs[i][charIndex];
            }
            // If char is not equal, set variable to false to exit loop
            if (strs[i][charIndex] !== currentChar) {
                sameChar = false;
            }
        }
        // If each char in the array of strings were the same, add it to the    longestPrefix
        if (sameChar === true) {
            longestPrefix += currentChar;
        }
        // Reset current char
        currentChar = "";
        // Move to next char
        charIndex++;
    }
    return longestPrefix;
};
