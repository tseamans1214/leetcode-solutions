/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length
    }
    let maxLength = 0; // To store the maximum length found
    let start = 0;     // Left pointer of the window
    const seen = new Set(); // To store unique characters in the current window

    for (let end = 0; end < s.length; end++) {
        // If the character is already in the set, shrink the window
        while (seen.has(s[end])) {
            seen.delete(s[start]);
            start++;
        }
        // Add the current character to the set
        seen.add(s[end]);
        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
