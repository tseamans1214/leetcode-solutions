// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // If only 3 values return the sum
    if (nums.length == 3) {
        return nums[0] + nums[1] + nums[2];
    }
    // Sort the array
    nums.sort(function(a,b){
        return a-b;
    })

    // Create variables for left, right, and closest sum
    let closestSum = nums[0] + nums[1] + nums[2];
    // Loop through array
    for (let i=0; i<nums.length; i++) {
        let left = i + 1;
        let right = nums.length-1;
        
        // For the current number, check sums with left and right pointers
        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];
            // Return target if current sum is equal to target
            if (currentSum === target) {
                return target;
            }
            // Move right pointer down if greater than target
            if (currentSum > target) { 
                right--;
            } else if (currentSum < target) { // Else move left pointer right
                left++;
            }
            // Check if current sum is closer to the target
            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                closestSum = currentSum;
            }
        }
    }
    return closestSum
};
