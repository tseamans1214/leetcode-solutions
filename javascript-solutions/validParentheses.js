/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // If the length is <= 1, it is not voild, return false
    if (s.length <= 1) {
        return false;
    }
    var parArray = [];
    // Loop through each char in s
    for (var i=0; i<s.length; i++) {
        // If current char is a opening parentheses, push it to the array
        if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
            parArray.push(s[i]);
        } else if (validPar(parArray.pop(), s[i])) { // Matching parentheses
            // Do nothing except remove top item from array
        } else { // Parenthesis do not match, return false
            return false;
        }
    }
    // If there were parentheses not closed, return false
    if (parArray.length > 0) {
        return false;
    } else {
        return true;
    }
};
 
// Help function to determine matching parentheses
function validPar(start, end) {
    if (start === "(" && end === ")") {
        return true;
    } else if (start === "[" && end === "]") {
        return true;
    } else if (start === "{" && end === "}") {
        return true;
    } else {
        return false;
    }
}
