import java.lang.Math;

class Solution {
    // Parameters
    //  String s
    //      0 <= s.length <= 200
    //      s may contain lowercase, uppercase, 0-9 digits, ' ', '+', '-', '.'
    // Return
    //  int number
    //      int version of given string s
    //      if number > 2^31 - 1, return 2^31 - 1
    //      if number < -2^31, return -2^31
    public int myAtoi(String s) {
        // Hold only the numbers in given string
        String stringInt = "";
        // Trim extra white space at beginning of s
        s = s.stripLeading();
        // If s.length is equal to 0, return 0
        if (s.length() == 0) {
            return 0;
        }
        
        boolean isNegative = false;
        int i = 0;
        // Check for negative or positive sign, or none
        if (s.charAt(i) == '-') {
            isNegative = true;
            i++;
            System.out.println("Negative");
        } else if (s.charAt(i) == '+') {
            i++;
            System.out.println("Positive");
        }
        // Read all characters until nondigits are reached
        while (i < s.length() && Character.isDigit(s.charAt(i))) {
            stringInt += "" + s.charAt(i);
            System.out.println("i: " + i);
            System.out.println("stringInt: " + stringInt);
            i++;
        }
        if (stringInt.length() == 0) {
            return 0;
        }
        // return int value
        if (isNegative) {
            try {
                return 0 - Integer.parseInt(stringInt);
            } catch (NumberFormatException nfe) { // Number is to small
                return (int) Math.pow(-2, 31);
            }
        } else {
            try {
                return Integer.parseInt(stringInt);
            } catch (NumberFormatException nfe) { // Number is to large
                return (int) Math.pow(2, 31);
            }
        }
    }
    
    // Test Cases
    // myAtoi("123") -> 123
    // myAtoi("    2222") -> 2222
    // myAtoi("232 some words") -> 232
    // myAtoi("-21") -> 21
    // myAtoi("+2") -> 2
}
