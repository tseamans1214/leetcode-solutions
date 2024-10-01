// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
// The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) {
        return x;
    }

    let left = 1, right = x, result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (mid * mid === x) {
            return mid; // If mid*mid is exactly x, return mid
        } else if (mid * mid < x) {
            result = mid;  // Store the result because mid might be the integer square root
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result; // Return the largest integer whose square is <= x
};
