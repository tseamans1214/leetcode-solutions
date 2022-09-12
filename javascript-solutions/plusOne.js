/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // If the last digit is less than 9, add 1 to it
    if (digits[digits.length-1] < 9) {
        digits[digits.length-1]++;
    } else { // else move to the first digit that isn't a 9 or the last one
        let i = digits.length-1;
        // While the current digit is not 9 and its not the last digit, move index
        while (digits[i] === 9 && i != 0) {
            i--;
        }
        // If the digit is not equal to 9
        if (digits[i] != 9) {
            // Increment it by one, to carry the 1
            digits[i]++;
            // Move to next digit
            i++;
            // Set the rest of the digits to 0 now that the 1 is carried over
            while (i < digits.length) {
                digits[i] = 0;
                i++;
            }
        } else { // If the digit is a 9, the last digit
            // Set it equal to 1 to carry the one
            digits[i] = 1;
            // If it is not the only digit
            if (digits.length != 1) {
                // Set the rest to 0
                i++;
                while (i < digits.length) {
                    digits[i] = 0;
                    i++;
                }
            }
            // Add a 0 at the end to finish carrying the 1
            digits.push(0);
        }
    }
    return digits;
};
