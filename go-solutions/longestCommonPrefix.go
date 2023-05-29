func longestCommonPrefix(strs []string) string {
    longestPrefix := ""
    // Loop through all characters
    out:
    for i:=0; i<len(strs[0]); i++ {
        //var currentPrefix string = strs[0][i] 
        // Loop through each each string
        for j:=1; j<len(strs); j++ {
            // If one string doesn't have matching char exit loop
            if i >= len(strs[j]) || strs[j][i] != strs[0][i] {
                break out
            }
        }
        // Add char to prefix to return
        longestPrefix += string(strs[0][i])
    }
    // Return prefix
    return longestPrefix
}
