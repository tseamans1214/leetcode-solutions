class Solution {
    public String intToRoman(int num) {
        // Create Roman String
        String romanString = "";
        // Create LinkedHashMap as a guide for all roman characters
        Map<String, Integer> romanCharGuide = new LinkedHashMap<>();
        romanCharGuide.put("M", 1000);
        romanCharGuide.put("CM", 900);
        romanCharGuide.put("D", 500);
        romanCharGuide.put("CD", 400);
        romanCharGuide.put("C", 100);
        romanCharGuide.put("XC", 90);
        romanCharGuide.put("L", 50);
        romanCharGuide.put("XL", 40);
        romanCharGuide.put("X", 10);
        romanCharGuide.put("IX", 9);
        romanCharGuide.put("V", 5);
        romanCharGuide.put("IV", 4);
        romanCharGuide.put("I", 1);
        // loop through the guide
        for (Map.Entry<String, Integer> guide : romanCharGuide.entrySet()) {
          // While greater than the current value
          while (num >= guide.getValue()) {
            // subtract current value from given number
            num -= guide.getValue();
            // add current roman char to final string
            romanString += guide.getKey();
          }
        }
        return romanString;
    }
}
