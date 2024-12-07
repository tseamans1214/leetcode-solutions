// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words.
// The returned string should only have a single space separating the words. Do not include any extra spaces.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // trim() to remove spaces from both ends of the string
    // split(/\s+/) split the string into a string array by any number of spaces between words
    // reverse() reverse the order of the array of words
    // join(" ") to create a string of all words separated by one space
    const result = s.trim().split(/\s+/).reverse().join(" ");
    return result;
};
