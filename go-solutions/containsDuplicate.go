unc containsDuplicate(nums []int) bool {
    // Create a map
    var intMap = make(map[int]int)
    // Loop through each number in array
    for i:=0; i<len(nums); i++ {
        _, isKey := intMap[nums[i]]
        // Check if the key exists
        if isKey { // Return true if it does exist
            return true
        } else { // If it doesn't, create a key-value
            intMap[nums[i]] = nums[i]
        }
    }
    // return false
    return false
}
