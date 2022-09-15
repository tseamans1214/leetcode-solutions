/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // if s is empty, return true
    if (s === "") {
        return true;
    }
    let i = 0;
    // Loop through all t's characters
    for (let j=0; j<t.length; j++) {
        // if the current character in s is found in t
        if (s[i] === t[j]) {
            // if all the characters have not been found yet
            if (i != s.length-1) {
                // move s index up one
                i++;
            // else all characters have been found, return true
            } else {
                return true;
            }
        }
    }
    return false;
};
