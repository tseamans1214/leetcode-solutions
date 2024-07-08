// Function
// Given an integer array called nums and a integer called val, remove all occurances of val in nums. The order of the elements maybe changed. Return the number of elements in nums which are not equal to val

// Parameters
// nums -> array of integers (no negatives, no strings, no decimals)
// val -> integer (no negatives, no strings, no decimals)

// Return
// number -> integer, count left in nums array 

function removeElement(nums: number[], val: number): number {
    // Create a loop to go through all values in nums
    for (let i=0; i<nums.length; i++) {
        // Check if current number in nums is equal to val
        // If current number equals val, remove it
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
        
    }
    // Return count of nums array
    return nums.length
};

console.log(removeElement([1,2,3], 2), 2);
console.log(removeElement([1,2,3], 4), 3);
console.log(removeElement([1,2,2,3], 2), 2);
