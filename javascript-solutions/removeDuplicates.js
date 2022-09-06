/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 0;
    // Loop through array while there are still 2 numbers to compare
    while (nums[i+1] != null) {
        // If the current number is equal to the next number
        if (nums[i] === nums[i+1]) {
            // Remove current number and move back one index
            nums.splice(i, 1);
            i = i-1;
        }
        i++;
    }
    // Return nums length
    return nums.length;
};
