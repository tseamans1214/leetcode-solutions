class Solution {
    public int maxArea(int[] height) {
        // Create a variable for maxArea
        int maxArea = 0;
        int currentArea = 0;
        int i = 0;
        int j = height.length-1;
        // While the start (i) and end (j) index are not equal
        //  Check if the current area is greater than max area
        while (i != j) {
            // If the start index is greater than end index
            //  use end index height for Area
            //  reduce end index by 1
            if (height[i] > height[j]) {
                currentArea = height[j] * (j-i);
                j--;
            } else { // else use start index for Area and increment start index by 1
                currentArea = height[i] * (j-i);
                i++;
            }
            // if the area is greater than max area
            if (currentArea > maxArea) {
                maxArea = currentArea;
            }
        }
        return maxArea;
    }
}
