func isPalindrome(x int) bool {
    if x < 0 {
        return false
    }
    if x < 10 {
        return true
    }
    var stringX string = strconv.Itoa(x)
    for i:=0; i < len(stringX); i++ {
        if (stringX[i] != stringX[len(stringX)-1-i]) {
            return false
        }
    } 
    return true
}
