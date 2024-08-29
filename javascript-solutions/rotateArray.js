// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // if the num of rotations is greater than the number of numbers
    //  it reduces it to the the remainder after being divided by the length of the array.
    //  This makes it so it there is no repeating rotaions being done.
    if (k > nums.length) {
            k = k % nums.length;
    }
    // If the number of rotations equals the length of the array it will be the same,
    //  so don't do anything unless it is different.
    if (k != nums.length) {
        // Gets all the elements that will be shifted to the beginning and removes them from nums
        let shiftedElements = nums.splice(nums.length-k, nums.length);
        // Moves shifted elements to the beginning of the array
        nums.splice(0, 0, ...shiftedElements)
    }
};
