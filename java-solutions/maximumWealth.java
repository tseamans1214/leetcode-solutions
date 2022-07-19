class Solution {
    // Parameters
        // accounts[i][j]
            // i: person
            // j: person's banks
    // O Notation: Linear O(n)
    public int maximumWealth(int[][] accounts) {
        int maxWealth = 0;
        // loop through each person
        for (int i=0; i<accounts.length; i++) {
            // create variable for current person's wealth
            int currentWealth = 0;
            // loop through current person's accounts
            for (int j=0; j<accounts[i].length; j++) {
                // add up all current person's wealth
                currentWealth += accounts[i][j];
            }
            // If current person's wealth is higher than max wealth,
                // set max wealth to current person's wealth
            if (currentWealth > maxWealth) {
                maxWealth = currentWealth;
            }
        }
        // return highest wealth
            // wealth = total amount in all of a person's banks
        return maxWealth;
    }
}
