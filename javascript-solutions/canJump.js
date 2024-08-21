/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0; // keeps track of the maximum index we can reach

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false; // if current index is beyond the maximum reachable index, return false
        }
        maxReach = Math.max(maxReach, i + nums[i]); // update the maximum reachable index
        if (maxReach >= nums.length - 1) {
            return true; // if we can reach or go beyond the last index, return true
        }
    }
    
    return false; // if loop ends and we didn't return true, return false
};
