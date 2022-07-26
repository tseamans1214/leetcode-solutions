class Solution {
    // Parameters
        // s - string
            // consist of any english chars, 
            //  digits, symbols, and spaces
    // Return
        // int - length of longest substring
    public int lengthOfLongestSubstring(String s) {
        
        // if s string only has 1 or 0 chars, return length
        if (s.length() <= 1) {
            System.out.println("Test");
            return s.length();
        }
        // create var for longest substring
        String longestSubstring = "";
        // create var for temp string
        String tempString = "";
        
        // loop through the string s chars
        for (int i=0; i<s.length(); i++) {
            // check if temp contains current char
            if (tempString.contains(s.charAt(i) + "")) {
                //  check if temp length is greater than longest string length
                if (tempString.length() > longestSubstring.length()) {
                    // set longest string to temp
                    longestSubstring = tempString;
                }
                // set var for lastChar to current char
                char lastChar = s.charAt(i);
                i--;
                // while current char is not equal to last repeated char
                //  and index is greater than 0
                while (i>0 && s.charAt(i) != lastChar) {
                    // move index back 
                    i--;
                }
                // after reaching duplicate char, move index up by 1
                i++;
                // set temp to current char
                tempString = s.charAt(i) + "";
            } else {
            // else it doesn't contain current char
                // add current char to temp string
                tempString += s.charAt(i) + "";
            }
        }
        // if longestSubtring length is less than temp string
        if (tempString.length() > longestSubstring.length()) {
            // return temp string length
            return tempString.length();
        }
        // return longest string length
        return longestSubstring.length();
    }
    
    // Test Cases
        // s = "abcabcbb"
            // return 3
            // abc the longest without repeating chars
        // s = "bbbb"
            // return 1
            // because "b" is the longest substring without repeated chars
        // s = "pwwkew"
            // return 3
            // longest substring is "wke"
}
