public class MyClass {
    public static void main(String args[]) {
      System.out.println(minNumStepsForStrongPassword("")); // 8
      System.out.println(minNumStepsForStrongPassword("password")); // 3
      System.out.println(minNumStepsForStrongPassword("Password")); // 2
      System.out.println(minNumStepsForStrongPassword("Password1")); // 1
      System.out.println(minNumStepsForStrongPassword("Password1$")); // 0
      System.out.println(minNumStepsForStrongPassword("1234")); // 4
    }
    
    // Check if given password is a strong passord
    //  A password is considered strong if:
    //      1. It is at least 8 characters long
    //      2. It contains a number
    //      3. It contains a special character
    //      4. It contains a lowercase letter
    //      5. It contains a uppercase letter
    // If it is not a strong password, return the least amount of steps it would take
    //  to make it a strong password
    
    // Paramters
        // String password
        //  can be any possible characters
        //  can be any length
    
    // Return
        // int minNumSteps
            // The minimum number of steps to make given password into strong password
            // If password given is strong return 0
    public static int minNumStepsForStrongPassword(String password) {
        int numSteps = 0;
        // Check for a number
        if (!password.test("(?=.*[0-9])")) {
            numSteps++;
            password += "1";
        }
        // Check for a special character
        if (!password.test("(?=.*[@#$%^&+=])")) {
            numSteps++;
            password += "!";
        }
        // Check for a lowercase letter
        if (!password.test("(?=.*[a-z]) ")) {
            numSteps++;
            password += "a";
        }
        // Check for a uppercase letter
        if (!password.test("(?=.*[A-Z])")) {
            numSteps++;
            password += "A";
        }
        // Check password length
        if (password.length() < 8) {
            numSteps += 8 - password.length();
        }
        // return numSteps
        return numSteps;
    }
}
