/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // Find an index of the target using binary search
    var targetIndex = recursiveFunction(nums, target, 0, nums.length-1);
    // If the target is found, find the start and end indexes
    if (targetIndex != -1) {
        var start =  targetIndex;
        var end = targetIndex;
        // While the start or end index contains the target
        while (nums[start-1] == target || nums[end+1] == target) {
            // If the next starting index contains the target, move index by -1
            if (nums[start-1] != null && nums[start-1] == target) {
                start--;
            }
            // If the next ending index contains the target, move index by 1
            if (nums[end+1] != null && nums[end+1] == target) {
                end++;
            }
        }
        // Return final start and end indexes
        return [start, end];
    } else { // If the target is not found return [-1,-1]
        return [-1,-1];
    }
};

// Binary Search Recursive function that finds first occurence of taget
//  and returns the index of it
var recursiveFunction = function (arr, x, start, end) {
      
    // Base Condition
    if (start > end) return -1;
  
    // Find the middle index
    let mid=Math.floor((start + end)/2);
  
    // Compare mid with given key x
    if (arr[mid]===x) return mid;
         
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else
 
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}
