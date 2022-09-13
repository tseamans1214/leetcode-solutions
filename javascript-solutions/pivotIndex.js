/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // Iterate through the nums array
    for (let i=0; i<nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        // Get left sum
        for (let left=0; left<i; left++) {
            leftSum += nums[left];
        }
        // Get right sum
        for (let right=i+1; right<nums.length; right++) {
            rightSum += nums[right]
        }
        // If both sides are equal, return current index
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};
