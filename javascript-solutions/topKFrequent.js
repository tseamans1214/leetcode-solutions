/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if (nums.length === k) {
        return nums;
    }
    let numMap = new Map();
    let numFreq = [];
    // Add all numbers to a map, keeping track for frequencies 
    for (let i=0; i<nums.length; i++) {
        numFreq[i] = [];
        if (numMap.has(nums[i])) {
            numMap.set(nums[i], numMap.get(nums[i]) + 1);
        } else {
            numMap.set(nums[i], 1);
        }
    }
    numFreq[nums.length] = [];
    // Loop through the map and add each number to the freq bucket
    numMap.forEach((value, key) => {
        numFreq[value].push(key);
    });
    let topNums = [];
    let target = 0;
    /// Loop through the number frequencies and grab the top k numbers
    for (let i=numFreq.length-1; i>=0; i--) {
        if (numFreq[i].length != 0) {
            for (let j=0; j<numFreq[i].length; j++) {
                topNums.push(numFreq[i][j]);
                target++;
                if (target === k) {
                    return topNums;
                }
            }
        }
    }
};
