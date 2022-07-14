class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        // Parameters
        // randomNote, magizine = all lowercase letters
        // ransomNote, magizine lengths > 1
    
        // Check if the note length is greater than magazine length
        if (ransomNote.length() > magazine.length()) {
            // return false because note cannot be made with a magazine 
            //  that has less characters than it does
            return false;
        }
        // Create a has map to track all the characters in magazine
        HashMap<String, Integer> hm = new HashMap<String, Integer>();
        // Loop through magazine and count the number of each character
        for (int i=0; i<magazine.length(); i++) {
            String currentChar = magazine.charAt(i) + "";
            if (hm.containsKey(currentChar)) {
                hm.put(currentChar, hm.get(currentChar) + 1);
            } else {
                hm.put(currentChar, 1);
            }
        }
        // Loop through the ransomNote and subtract one from the count for the character found
        for (int i=0; i<ransomNote.length(); i++) {
            // Set variable for current character
            String currentChar = ransomNote.charAt(i) + "";
            // if the map contains the current character 
            if(hm.containsKey(currentChar)){
                // Subtract one from the count
                hm.put(currentChar, hm.get(currentChar) - 1);
                // if count < 0, return false because magazine didn't have enough characters
                if(hm.get(currentChar) < 0){
                    return false;
                 }
            }else{ // if the magazine doesn't contain a character in the note return false
                return false;
            }
        }
        // if it makes it through the end, it found all the characters so return true;
        return true;
        
    }
    
    // if ransomNote can be constructed from magizine
    // return true
    // else
    // return false
}

// canContruct("a", "b") -> false
// canContruct("a", "a") -> true
// canContruct("a", "aa") -> true
// canContruct("aa", "a") -> false
// canContruct("ab", "abc") -> true
