// You are given a sorted unique integer array nums.
// A range [a,b] is the set of all integers from a to b (inclusive).
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
// That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that 
// x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    let outputArray = [];
    // If the length of nums is 1 just return the array converted to a string
    if (nums.length == 1) {
        outputArray.push(nums[0] + "");
        return outputArray;
    }
    // Loop through the nums array to find all intervals
    for (let i=0; i<nums.length; i++) {
        // If the next number is not equal to the current number plus 1
        if (nums[i+1] != nums[i] + 1) {
            // Add the single number to the array since it isn't an interval
            outputArray.push(nums[i] + ""); 
        } else { // It is an interval
            let startNumber = nums[i];
            let endNumber = nums[i+1];
            // Continue looping to see if the interval continues
            for (let j=i+1; j<nums.length; j++) {
                // If the interval does not continue, push the current interval into the array
                // and move the index to the current position
                if (nums[j+1] != nums[j] + 1) {
                    outputArray.push(startNumber + "->" + endNumber);
                    i = j;
                    break;
                } else { // Else it is an interval, so we move the end number to the next number
                    endNumber = nums[j+1]
                }
            }
        }
    }
    return outputArray;
