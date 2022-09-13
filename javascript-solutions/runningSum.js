/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let currentSum = 0;
    let sumArray = [];
    
    for (let i=0; i<nums.length; i++) {
        currentSum = currentSum + nums[i];
        sumArray[i] = currentSum;
    }
    
    return sumArray;
};
