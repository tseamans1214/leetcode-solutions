// Problem: Count Prefix and Suffix Pairs One
// You are given a 0-indexed string array words.

// Let's define a boolean function isPrefixAndSuffix that takes two strings, str1 and str2:

// isPrefixAndSuffix(str1, str2) returns true if str1 is both a 
// prefix
//  and a 
// suffix
//  of str2, and false otherwise.
// For example, isPrefixAndSuffix("aba", "ababa") is true because "aba" is a prefix of "ababa" and also a suffix, but isPrefixAndSuffix("abc", "abcd") is false.

// Return an integer denoting the number of index pairs (i, j) such that i < j, and isPrefixAndSuffix(words[i], words[j]) is true.
/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let wordsLength = words.length;
    // Edge Cases
    if (wordsLength <= 1) { return 0; }

    let pairCount = 0;
    for (let i=0; i<wordsLength-1; i++) {
        for (let j=i+1; j<wordsLength; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) pairCount++;
        }
    }
    return pairCount;
};

function isPrefixAndSuffix(str1, str2) {
    // Check if str1 is a prefix and suffix of str2
    return str2.startsWith(str1) && str2.endsWith(str1);
}
