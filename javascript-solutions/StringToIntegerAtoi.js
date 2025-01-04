// Problem: String to Integer (atoi)
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:
// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
//  Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
//  Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.

//Return the integer as the final result.

/**
 * @param {string} s
 * @return {number}
 */
 // s: string containing either english letters, 0-9 digits, " ", and signs (+ for positive, - for negative)
var myAtoi = function(s) {
    let isNegative = false;
    let start = 0;
    let finalString = "";
    // trim leading whitespace
    s = s.trim();
    // Check if first char is a negative or positive sign
    if (s[0] === "-") {
        isNegative = true;
        start++;
    } else if (s[0] === "+") { 
        start++;
    }
    // Loop through the rest of s string, adding all numbers to final string to be converted to int
    for (let i=start; i<s.length; i++) {
        if (Number.isNaN(parseInt(s[i]))) {
            break;
        } else {
            finalString += s[i];
        }
    }
    // If there was no numbers in the string, return 0
    if (finalString === "") {
        return 0;
    }
    // Convert to integer
    let convertedInt = isNegative ? 0 - parseInt(finalString) : parseInt(finalString);
    
    // Return s converted to an integer, round if it is greater than or less than the max
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;
    if (convertedInt < INT_MIN) {
        return INT_MIN;
    } else if (convertedInt > INT_MAX){
        return INT_MAX;
    }
    return convertedInt;
};

// myAtoi("42") -> 42
// myAtoi("-042") -> -42

