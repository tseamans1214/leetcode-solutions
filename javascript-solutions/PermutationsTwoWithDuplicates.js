// Problem: Permutations II
// Description: Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 // nums: array of integers where -10 <= nums[i] <= 10, 1 <= nums.length <= 9
var permuteUnique = function(nums) {
    const results = [];
    nums.sort((a, b) => a - b); // Sort to handle duplicates
    const used = Array(nums.length).fill(false);

    function backtrack(currentPermutation) {
        if (currentPermutation.length === nums.length) {
            results.push([...currentPermutation]); // Add a copy of the current permutation
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip duplicates
            if (used[i]) continue;
            // Skips this number if:
            //  It is at least the second number in the iteration
            //  AND the current number equals the previous number
            //  AND the pervious number has not been used in a permutation this recursion
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            // Include nums[i] in the current permutation
            currentPermutation.push(nums[i]);
            used[i] = true;

            // Recurse
            backtrack(currentPermutation);

            // Backtrack
            currentPermutation.pop();
            used[i] = false;
        }
    }

    backtrack([]);
    return results;
};

// permuteUnique([1,1,2]) -> [[1,1,2], [1,2,1], [2,1,1]];
// permuteUnique([1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]];
