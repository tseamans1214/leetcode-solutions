// Given an array of distinct integers candidates and a target integer target, 
// return a list of all unique combinations of candidates where the chosen numbers sum to target. 
// You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. 
// Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is 
// less than 150 combinations for the given input.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // Check if array has a length of 0 or 1
    if (candidates.length == 0) {
        return [];
    } else if (candidates.length == 1) {
        if (candidates[0] == target) {
            return candidates;
        } else {
            return [];
        }
    }
    const result = [];
    // Recursive function
    function backtrack(start, currentCombination, remainingTarget) {
        if (remainingTarget === 0) {
            // If the target is met, push a copy of the combination to the result
            result.push([...currentCombination]);
            return;
        }

        if (remainingTarget < 0) {
            // If the remaining target becomes negative, stop exploring this path
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Choose the candidate
            currentCombination.push(candidates[i]);
            
            // Recursively try further with the current candidate
            backtrack(i, currentCombination, remainingTarget - candidates[i]);
            
            // Undo the choice (backtrack)
            currentCombination.pop();
        }
    }

    backtrack(0, [], target);
    return result;
};
