class Solution {
    // Parameters
    //  int x
        // range -2^31 <= x <= 2^31 -1
    // Return
    //  boolean isPalidrome
    //      if x = x reversed, return true
    public boolean isPalindrome(int x) {
        // If x < 0, return false
        if (x < 0) return false;
        // If x < 10, return true
        if (x < 10) return true;
        // Create a string variable equal to int x
        String xString = "" + x;
        // Create a string for reverse String
        String xStringReverse = "";
        // Loop through orginal String backwards
        for (int i=xString.length()-1; i>=0; i--) {
            // Add current string to reverse string
            xStringReverse += "" + xString.charAt(i);
        }
        // Check if the original string equals reverse string
        //  if they are equal return true
        if (xString.equals(xStringReverse)) {
            return true;
        } else {    //  else return false
            return false;
        }
    }
    
    // Test Cases
    //  isPalindrome(-121) -> false
    //      because -121 != 121-
}
