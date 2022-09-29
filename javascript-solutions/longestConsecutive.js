/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // Place nums array into a set
    let set = new Set(nums);
    // Create variable to track longest consecutive
    let longest = 0;
    
    // Loop through nums array
    for (let i=0; i<nums.length; i++) {
        // if the current number does not have a number to the left of it in the set
        // aka has a number right before it
        if (set.has(nums[i] - 1) === false) {
            let length = 0;
            // Count how many consecutive numbers come after current number
            while (set.has(nums[i] + length)) {
                length += 1;
            }
            // If the current set is longer, set longest variable to it
            if (length > longest) {
                longest = length;
            }
        }
    }
    return longest;
};
