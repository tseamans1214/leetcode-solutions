/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const solution = [];
    
    const generateCombo = (leftPCount, rightPCount, partial) => {
        // Filters invalid parentheses combos by checking is closing parentheses are used first
        if (leftPCount > rightPCount) return;
        // If left and right parentheses equals 0, it is a valid combo
        if (leftPCount === 0 && rightPCount === 0) solution.push(partial);
        // Adds left parentheses and makes recursive call
        if (leftPCount > 0) generateCombo(leftPCount - 1, rightPCount, partial + "(");
        // Adds right parentheses and makes recursive call
        if (rightPCount > 0) generateCombo(leftPCount, rightPCount - 1, partial + ")");
    }
    
    // Makes call to recursive functions
    generateCombo(n,n,"");
    return solution;
};
