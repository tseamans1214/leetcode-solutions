import java.io.*;
import java.util.*;

public class MyClass {
    public static void main(String args[]) {
      System.out.println(minNumStepsForStrongPassword("")); // 8
      System.out.println(minNumStepsForStrongPassword("password")); // 3
      System.out.println(minNumStepsForStrongPassword("Password")); // 2
      System.out.println(minNumStepsForStrongPassword("Password1")); // 1
      System.out.println(minNumStepsForStrongPassword("Password1$")); // 0
      System.out.println(minNumStepsForStrongPassword("1234")); // 4
    }
    
    public static int minNumStepsForStrongPassword(String input)
    {
        int numSteps = 0;
        // Checking lower alphabet in string
        int n = input.length();
        boolean hasLower = false, hasUpper = false,
                hasDigit = false, specialChar = false;
        Set<Character> set = new HashSet<Character>(
            Arrays.asList('!', '@', '#', '$', '%', '^', '&',
                          '*', '(', ')', '-', '+'));
        for (char i : input.toCharArray())
        {
            if (Character.isLowerCase(i))
                hasLower = true;
            if (Character.isUpperCase(i))
                hasUpper = true;
            if (Character.isDigit(i))
                hasDigit = true;
            if (set.contains(i))
                specialChar = true;
        }
        
        if (hasDigit == false) {
            input += "1";
            numSteps++;
        }
        if (hasLower == false) {
            input += "a";
            numSteps++;
        }
        if (hasUpper == false) {
            input += "A";
            numSteps++;
        }
        if (specialChar == false) {
            input += "A";
            numSteps++;
        }
        if (input.length() < 8) {
            numSteps += 8 - input.length();
        }
        return numSteps;
    }
}
