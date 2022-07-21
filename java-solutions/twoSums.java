class Solution {
    // Parameters
        // int[] nums -> negative or positive
        // target -> sum of 2 numbers in nums should equal target
    // Returns
        // int[] -> returns the 2 indices where nums add up to target
    public int[] twoSum(int[] nums, int target) {
        // create array to return
        int[] twoNums = new int[2];
        // Loop through nums
        for (int i=0; i<nums.length; i++) {
            // Grab the first num
            int firstNum = nums[i];
            // loop through nums again
            for (int j=i; j<nums.length; j++) {
                // check to make sure they are not the same number
                if (i != j) {
                    // grab the second num
                    int secondNum = nums[j];
                    // check if the sum of first and second equal the target
                    if (firstNum + secondNum == target) {
                        // set indexes to created array
                        twoNums[0] = i;
                        twoNums[1] = j;
                        // return array
                        return twoNums;
                    }
                }
            }
        }
        return null;
    }
}
