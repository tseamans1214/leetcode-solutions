// Problem: Search Insert Position
// Description: Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // nums- array of integers, where 1 >= nums.length < large number
 // target - number to try to find in nums,
 // return index where the target is found in nums OR
 // return where the index would be if it was inserted into nums 
var searchInsert = function(nums, target) {
    // Search Logic
    // 1. Search for the target in nums using binary search
    // 2 If we pass where it should be, determine where it would be inserted and return that index
    // 3 Cases
    // Case 1: nums[i-1] > target && target < nums[i], return i
    // Case 2: target < nums[0], return 0
    // Case 3 target > nums[n-1], return n

    // Case 1
    if (target < nums[0]) {
        return 0;
    }
    // Case 2
    let n = nums.length;
    if (target > nums[n-1]) {
        return n;
    }
    // 1. Search for the target in nums
    let start = 0;
    let end = n;
    while (start < end) {
        let mid = Math.floor((start+end) / 2);
        // If it is found, return the index
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
    // Case 3
    if (target <= nums[start]) {
        return start;
    } else {
        return start + 1;
    }
    return start;
};

//searchInsert([1,3,5,6], 5) -> 2
//searchInsert([1,3,5,6], 2) -> 2
//searchInsert([1,3,5,6], 7) -> 4
