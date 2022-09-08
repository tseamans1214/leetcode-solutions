/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // If needle is null or empty, return -1
    if (needle == null || needle.length == 0) {
        return -1;
    }
    // Create variable for start index
    var startingIndex = 0;
    // Loop through haystack
    for (var i=0; i<haystack.length; i++) {
        //  Check if the current character of haystack matches first character of needle
        if (haystack[i] === needle[startingIndex]) {
            // If needle is only one char, return i, starting index in haystack
            if (needle.length === 1) {
                return i;
            }
            startingIndex++;
            // Loop through the rest of needle checking the rest of the characters
            for (var j=startingIndex; j<needle.length; j++) {
            //  If each character matches return starting index
                if (needle[j] === haystack[i+j]) {
                    // If it is the last character, return i, current start index in haystack
                    if (j === needle.length-1) {
                        return i;
                    }
                } else { //  else break from loop and reset starting index
                    startingIndex = 0;
                    break;
                }
            
            }
        }
    }
    // return -1 if not found
    return -1;
    
};
