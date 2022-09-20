/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = Array(nums.length).fill(1);
    let prefix = 1;
    let postfix = 1;
    // Prefix
    // Loop through nums from beginning to end
    for (let i=0; i<nums.length; i++) {
        // Set current result index to prefix
        result[i] = prefix;
        // Set prefix equal to prefix * nums[i]
        prefix *= nums[i];
    }
    // Postfix
    // Loop through nums from end to beginning
     for (let i=nums.length-1; i>=0; i--) {
        // Set result[i] to result[i] * current postfix
        result[i] *= postfix;
        // Set postfix 
        postfix *= nums[i];
     }
    return result;
};
