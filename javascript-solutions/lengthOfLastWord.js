// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substringconsisting of non-space characters only.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Remove starting and ending spaces in the string
    s = s.trim();
    // Split the string into an array of words separated by a space
    let words = s.split(" ");
    // Return length of the last word
    return words[words.length-1].length;
};
