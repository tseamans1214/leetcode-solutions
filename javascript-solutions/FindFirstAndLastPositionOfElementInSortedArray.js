// Problem: Find First and Last Position of Element in Sorted Array
// Description: Given an array of integers nums sorted in non-decreasing order, 
//  find the starting and ending position of a given target value.
//  If target is not found in the array, return [-1, -1].
//  You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // nums: array of integers, 0 <= nums.length <= 10^5
 // target: integer to find in nums 

function searchRangeAI(nums, target) {
    // Helper function to find the index of the target
    function binarySearch(findFirst) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                result = mid; // Potential answer found
                if (findFirst) {
                    right = mid - 1; // Search in the left half
                } else {
                    left = mid + 1; // Search in the right half
                }
            } else if (nums[mid] < target) {
                left = mid + 1; // Target is in the right half
            } else {
                right = mid - 1; // Target is in the left half
            }
        }

        return result;
    }

    const first = binarySearch(true); // Find the first occurrence
    if (first === -1) {
        return [-1, -1]; // Target not found
    }

    const last = binarySearch(false); // Find the last occurrence
    return [first, last];
}
var searchRange = function(nums, target) {
    let n = nums.length;
    // Edge Cases
    if (n === 0) return [-1,-1];
    if (n === 1) {
        if (nums[0] === target) return [0,0];
        else return [-1,-1];
    }

    let targetStartIndex = -1;
    let targetEndIndex = -1;
    let start = 0;
    let end = n;
    // 1 2 3 4 5
    // start = 0;
    // end = 4
    // (start + end) / 2 = 2 
    while (start < end && end - start != 1) {
        // Split the array in half
        let middle = Math.floor((start+end) / 2);
        // Check if middle value is equal to target
        if (nums[middle] === target) {
            // Setup pointers for the left and right values
            // left = middle - 1
            // right = middle + 1
            let left = middle - 1;
            let right = middle + 1;
            targetStartIndex = middle;
            targetEndIndex = middle;
            // while left === target && left != 0
                // set targetStartIndex = left
                // left--
            //
            while (left !=-1 && nums[left] === target) {
                targetStartIndex = left;
                left--;
            }
            // while right === target && right != n
                // set targetEndIndex = right
                // right++
            //
            while (right !=n && nums[right] === target) {
                targetEndIndex = right;
                right++;
            }
            // return [targetStartIndex, targetEndIndex]
            return [targetStartIndex, targetEndIndex]
        } else if (target >= nums[middle]) { // Else if check if target >= middle value
            // start = middle
            start = middle + 1;
        } else { // Else target < middle value
            // end = middle
            end = middle -1;
        }

    }
    if (end - start <= 1) {
        if (nums[start] === target) {
            targetStartIndex = start;
        }
        if (nums[end] === target) {
            targetEndIndex = end;
        }
        if (targetStartIndex != -1 && targetEndIndex == -1) {
            targetEndIndex = targetStartIndex;
        }
        if (targetEndIndex != -1 && targetStartIndex == -1) {
            targetStartIndex = targetEndIndex;
        }

        return [targetStartIndex, targetEndIndex];
    }
    return [-1, -1]

};

// searchRange([5,7,7,8,8,10], 8) -> return [3,4]
// searchRange([5,7,7,8,8,10], 6) -> return [-1,-1]
