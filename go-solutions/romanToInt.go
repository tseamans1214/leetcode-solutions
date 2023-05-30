func romanToInt(s string) int {
    // Rules for Roman Numbers
    // 1. No more than 4 of same character
    // 2. Lower numbers on left side of larger numbers subtract
    // 3. Lower numbers on right side of larger numbers add

    // If string is only one character long, return value
    if len(s) == 1 {
        return romanCharToInt(s[0])
    }
    // Create variable to track total
    var total = 0
    // Create variable to track added values
    var addedValues = romanCharToInt(s[0])
    // Loop through each char in the given string
    for i:=1; i<len(s); i++ {
        // if current char is equal to last char
        if romanCharToInt(s[i]) == romanCharToInt(s[i-1]) {
            addedValues += romanCharToInt(s[i])
        } else if  romanCharToInt(s[i]) > romanCharToInt(s[i-1]) {
            // subtract added values from current char
            addedValues =  romanCharToInt(s[i]) - addedValues
            // add result to total
            total += addedValues
            // reset added values variable 
            addedValues = 0
        } else {
            total += addedValues
            addedValues = 0
            // add to added value variable
            addedValues += romanCharToInt(s[i])
        }
    }

    // add added value variable to total
    total += addedValues
    // return total
    return total

}
// Roman Characters
    // I=1
    // V=5
    // X=10
    // L=50
    // C=100
    // D=500
    // M=1000
func romanCharToInt(s byte) int {
    if s=='I' {
        return 1
    } else if s=='V' {
        return 5
    } else if s=='X' {
        return 10
    } else if s=='L' {
        return 50
    } else if s=='C' {
        return 100
    } else if s=='D' {
        return 500
    } else if s=='M' {
        return 1000
    } else {
        return 0
    }
}
