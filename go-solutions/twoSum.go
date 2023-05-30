func twoSum(nums []int, target int) []int {
    for i:=0; i < len(nums); i++ {
        for j:=i+1; j < len(nums); j++ {
            //fmt.Println("nums[i]: " + strconv.Itoa(nums[i]) + " nums[j]: " + strconv.Itoa(nums[j]))
            if (nums[i] + nums[j] == target) {
                return []int{i,j}
            }
        }
    }
    return []int{0,0}
}
