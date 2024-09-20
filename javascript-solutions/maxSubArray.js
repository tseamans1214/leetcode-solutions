// Given an integer array nums, find the 
// subarray with the largest sum, and return its sum.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = nums[0]; // Start with the first element as the current subarray sum
    let maxSum = nums[0];     // Start with the first element as the max sum

    // Loop through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Either extend the current subarray or start a new subarray with the current element
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update maxSum if the currentSum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
