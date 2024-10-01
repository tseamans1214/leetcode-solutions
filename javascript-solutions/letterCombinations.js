// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
        if (digits.length === 0) {
        return [];
    }

    // Mapping of digits to letters, just like on a phone keypad
    const phoneMap = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    const result = [];
    
    // Backtracking function to generate combinations
    function backtrack(index, currentCombination) {
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }

        const letters = phoneMap[digits[index]]; // Get the letters for the current digit
        for (let letter of letters) {
            backtrack(index + 1, currentCombination + letter); // Recursive call for next digit
        }
    }

    backtrack(0, "");
    return result;
};
