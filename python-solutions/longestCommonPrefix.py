class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        longestPrefix = ""
        isSamePrefix = True
        # Loop through each char
        for i in range(len(strs[0])):
            currentChar = strs[0][i]
            # Loop through each string
            for j in range(len(strs)):
                if  i >= len(strs[j]) or strs[j][i] != currentChar:
                    isSamePrefix = False
                    break
            if isSamePrefix == True:
                longestPrefix += currentChar
            else:
                break
        return longestPrefix
