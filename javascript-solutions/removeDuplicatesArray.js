// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. 
// The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        
    } else {
        let previousNum = nums[0];
        let sameNumCount = 1;
        // Loop through nums array
        for (let i=1; i<nums.length; i++) {
            
            // Count how many times this number has occurred
            if (previousNum === nums[i]) {
                sameNumCount++;
                console.log("sameNumCount: " + sameNumCount);
            } else {
                previousNum = nums[i];
                sameNumCount = 1;
            }
            // If it has occured more than 2 times, remove it
            if (sameNumCount === 3) {
                console.log("nums before: " + nums);
                nums.splice(i, 1);
                console.log("nums after: " + nums);
                sameNumCount--;
                i--;
            }
        }
    }
};
