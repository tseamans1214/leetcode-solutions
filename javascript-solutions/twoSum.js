/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const missing = numMap.get(target - currentNum)
        if (missing !== undefined) {
            return [missing, i];
        }
        
        numMap.set(currentNum, i);
    }
}
