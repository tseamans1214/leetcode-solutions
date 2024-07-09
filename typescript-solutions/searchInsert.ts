// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Parameters
// nums[] - sorted array of numbers (only integers, no negatives)
// target - number that we are looking for in the nums array (only integer, may or may not be in nums array)

// return
// number - index of the given target number in nums or the index where it would be located in nums array

function searchInsert(nums: number[], target: number): number {
    // Loop through nums array
    for (let i=0; i<nums.length; i++) {
        // if target is equal to current number, return current index
        if (target == nums[i]) {
            return i;
        } // if target is less than current number, return previous index
        else if (target < nums[i]) {
            if (i === 0) {
                return 0;
            } else {
                return i;
            }
        }
        // else move to next index
    }
    // If target is not found and has no place in nums array, return the last index plus 1 since it is greater than all the numbers in nums
    return nums.length
    
};

// Example tests
console.log(searchInsert([1,2,3], 2), 1)
console.log(searchInsert([1,2,3], 3), 2)
console.log(searchInsert([1,2,3], 4), 3)
