class Solution {
    public int romanToInt(String s) {
        // Parameter constraints
            // Range of Roman Numberals 1 to 3999 integers
            // 1 <= s.length <= 15
            // s contain only characters 'I', 'V', 'X', 'L', 'C', 'D', 'M' (all uppercase)
            // Only be valid roman numbers (max 3 of same roman numeral)
                // I can be placed before V (5) and X (10) to make 4 and 9. 
                // X can be placed before L (50) and C (100) to make 40 and 90. 
                // C can be placed before D (500) and M (1000) to make 400 and 900.
        
        
        if (s.length() == 1) {
            return romanCharValue(s.charAt(0));
        }
        // Create a sum variable to hold total roman numeral value
        int sum = 0;
        // Loop through all chars in the roman String
        for (int i=0; i<s.length(); i++) {
            // Get the value of the current character
            int currentVal = romanCharValue(s.charAt(i));
            
            // If we are on the last char, just add value to sum
            if (i == s.length()-1) {
                sum += currentVal;
            } else { // if this is not the last char
                // Get the value of the next char
                int nextVal = romanCharValue(s.charAt(i+1));
                if (currentVal >= nextVal) { // if the current value > next value, add current to sum
                    sum += currentVal;
                } else { // Subtract current value from next value, add result to sum
                    sum += nextVal - currentVal;
                    // increment index by 1 so it doesn't repeat on same value
                    i++;
                }
            }
        }
        // return the final sum
        return sum;
        
        
        
        //Algorithm to convert Roman Numerals to Integer Number:  
            // Split the Roman Numeral string into Roman Symbols (character).
            // Convert each symbol of Roman Numerals into the value it represents.
            // Take symbol one by one from starting from index 0: 
            // If current value of symbol is greater than or equal to the value of next symbol, 
            //  then add this value to the running total.
            // else subtract this value by adding the value of next symbol to the running total.
    }
    
    // Return value of roman character as an int
    // int romanCharValue(char char)
    int romanCharValue(char c) {
        if (c == 'I') return 1;
        if (c == 'V') return 5;
        if (c == 'X') return 10;
        if (c == 'L') return 50;
        if (c == 'C') return 100;
        if (c == 'D') return 500;
        if (c == 'M') return 1000;
        
        return -1;
    }
    // Returns
    //  int 1 to 3999
    
    // Test Cases
    // romanToInt("III"); -> 3
    // romanToInt("IV"); -> 4
    // romanToInt("IIX"); -> 8
    // romanToInt("LVIII"); -> 58
    // romanToInt("MMMCMXCIX"); -> 3999
}
