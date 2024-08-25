// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let midIndex = Math.floor(nums.length / 2);
    // Sort the array
    nums.sort(function(a,b){return a-b});
    // Return the element that is at the midpoint (only the element that is the majority will at the midpoint when sorted)
    return nums[midIndex]
};
