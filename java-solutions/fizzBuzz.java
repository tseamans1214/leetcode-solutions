class Solution {
    // Parameters
        // n = int
        // 1 <= n <= 10^4
    // Returns
        // List<String>
        // ex: n=3, return ["1", "2", "Fizz"]
    public List<String> fizzBuzz(int n) {
        // n divisible by 3 and 5 = FizzBuzz
        // n divisible by 5 = Buzz
        // n divisible by 3 = Fizz
        
        // Create an empty String List
        List<String> list = new ArrayList<String>();
        // Loop from 1 to n
        for (int i=1; i<=n; i++){
            // check if current number divisble by 3 and 5
            if (i % 3 == 0 && i % 5 == 0) {
                //  add FizzBuzz to list
                list.add("FizzBuzz");
            } else if (i % 5 == 0) { // check if current number divisble by 5
                // add Buzz to list
                list.add("Buzz");
            } else if (i % 3 == 0) { // check if current number divisible by 3
                // add Fizz to list
                list.add("Fizz");
            } else {
                // add "n" to list
                list.add("" + i);
            }
                
                
        }
            
        return list;
    }
    
    // fizzBuzz(3) -> ["1", "2", "Fizz"]
    // fizzBuzz(5) -> ["1", "2", "Fizz", "4", "Buzz"]
    // fizzBuzz(15) -> ["1", "2", "Fizz", "4", "Buzz" "Fizz", "7", "8", "Fizz", "Buzz", "11", 
    //                  "Fizz", "13", "14", "FizzBuzz"];
}
