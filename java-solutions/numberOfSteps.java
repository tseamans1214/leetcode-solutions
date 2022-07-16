class Solution {
    // Parameters
        // int num -> [0-10^6]
        // always an int
    // return 
        // int count of steps/operations to reach 0
    public int numberOfSteps(int num) {
        
        // declare a int count variable for number of operations
        int count = 0;
        // while num != 0
        while (num != 0) {
            // if num is even
            if (num % 2 == 0) {
                // set num equal to num / 2
                num = num / 2;
            } else { // else num is odd
                // set num equal to num - 1
                num = num - 1;
            }
            // count++
            count++;
        }
        // return count
        return count;
    }
    // Test Cases
    // numberOfSteps(0) -> 0
    // numberOfSteps(1) -> 1
    // numberOfSteps(3) -> 3
    // numberOfSteps(4) -> 3
}
