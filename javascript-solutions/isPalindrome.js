/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().trim().replace(/[^a-z0-9]/gi, '');
    let reverse = s.split("").reverse().join("");
    if (s === reverse) {
        return true;
    } else {
        return false;
    }
};
