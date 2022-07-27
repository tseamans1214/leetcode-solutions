class Solution {
    // Parameters
        // int[m] nums1
            // size m -> [0,1000]
            // values can be any negative or positive numbers
        // int[n] nums2
            // size n -> [0,1000]
            // values can be any negative or positive numbers
        // m + n >= 1
    // Return
        // double median
            // median of the combined nums 1 and nums 2
            // if size is odd, median is the middle index
            // if size is even, median is the two indexes divided by 2
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Create double median variable
        double median = 0;
        // Create new int array with length m+n
        int[] combinedArray = new int[nums1.length+nums2.length];
        
        // Combine nums1 and nums2
        int i = 0;
        int j = 0;
        // While iterator is less than nums1.length and nums2.length
        while (i<nums1.length || j<nums2.length) {
             if (i>=nums1.length) {
                // set next value in combined array to nums1[i]
                combinedArray[i+j] = nums2[j];
                // j++
                j++;
            } else if (j>=nums2.length) {
                // set next value in combined array to nums1[i]
                combinedArray[i+j] = nums1[i];
                // i++
                i++;
            }else if (nums1[i] < nums2[j]) { // If nums1 current value is < nums2 current value
                // set next value in combined array to nums1[i]
                combinedArray[i+j] = nums1[i];
                // i++
                i++;
            } else {
            // else
                // set next value in combined array to nums2[j]
                combinedArray[i+j] = nums2[j];
                // j++
                j++;
            }
        }
        // Find the median of combined array
        // if combined length is even
        if (combinedArray.length % 2 == 0) {
            // add value at length/2 to value at (length/2) - 1
            double result = combinedArray[combinedArray.length/2] + combinedArray[(combinedArray.length/2) - 1];
            // set median to previous answer/2
            median = result / 2;
        } else {
        // else
            // set median to value at length/2
            median = combinedArray[combinedArray.length/2];
        }
        // Return median
        return median;
    }
    
    // Test Cases
        // T1
            // nums1 = [1,2], nums2 = [3,4]
            // return 2.5
            // because [1,2,3,4] median is (2+3) / 2
        // T2
            // nums1 = [1,3], nums2 = [2]
            // return 2
            // because [1,2,3] median is 2
        // T3
            // nums1 = [], nums2 = [1,2]
            // returns 1.5
            // because [1,2] median is (1+2) / 2
        // T4
            // nums1 = [], nums2 = [1]
            // return 1
            // because only number
        
}
