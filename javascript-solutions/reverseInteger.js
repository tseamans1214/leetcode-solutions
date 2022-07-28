/**
 * @param {number} x
 * @return {number}
 */
    // Parameters
        // int x - 32-bit integer [-2^31 <= x <= 2^31-1]
    // Return
        // int x with digits reversed
            // if value goes outside 32-bit range, return 0
var reverse = function(x) {
    // Create isNegative variable to track if input is negative
    var isNegative = false;
    // Check if negative
    if (x < 0) {
        isNegative = true;
    }
    // Convert int x into a string
    var numString = x + "";
    // Split the string into a char array
    // Reverse char array
    // Join char array into string
    var reverseString = numString.split("").reverse().join("");
    // If the original input was negative, put negative sign in front
    if (isNegative) {
        reverseString = "-" + reverseString;
    }
    // Convert string back to int
    var result = parseInt(reverseString);
    
    // If int result is <= -2^31 or result >= 2^31-1
    if (result <= Math.pow(-2,31) || result >= Math.pow(2,31) - 1) {
        // return 0
        return 0;
    }
    // return result
    return result;
};

    // Test Cases
    // 1
        // input x = 123
        // return 321
    // 2
        // input x = -123
        // return -321
    // 3
        // input x = 120
        // return 21
    // 4
        // input x = -2147483648
        // return 0
