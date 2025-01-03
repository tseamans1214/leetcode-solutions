/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 // PREP

 // Parameters
 // s: string to replicate by stretching out letters (letters can only be stretched to 3 or higher)
 // words: array of strings that can be used to try to strecth to replicate the string s
var expressiveWords = function(s, words) {
    let numStretchy = 0;
    let isStretchy = (source, target) => {
        let sourceLength = source.length
        let  targetLength = target.length;
      
        // If target is longer than source, it cannot be stretched to match source.
        if (sourceLength > targetLength) return false;
      
        let i = 0, j = 0; // Pointers for source and target strings.
      
        // Iterate over both strings
        while (i < sourceLength && j < targetLength) {
            // If characters at current pointers don't match, return false.
            if (source[i] != target[j]) return false;
          
            let currentChar = source[i];
            // Count the number of consecutive characters in source.
            let sourceCharCount = 0;
            while (i < sourceLength && source[i] == currentChar) {
                sourceCharCount++;
                i++;
            }
          
            // Count the number of consecutive characters in target.
            let targetCharCount = 0;
            while (j < targetLength && target[j] == currentChar) {
                targetCharCount++;
                j++;
            }

            // Check if the run in source can be stretched to match target's run.
            // If source's run is shorter than target's, or if source's run is not stretchable 
            //  (countSource < 3) and not equal to target's run, return false.
            if (sourceCharCount > targetCharCount ||
                (targetCharCount < 3 && sourceCharCount != targetCharCount)) {
                    return false;
            }
            
        }
      
        // If we've reached the end of both source and target, return true.
        return i === sourceLength && j === targetLength;

    }
    for (const word of words) {
        if (isStretchy(word, s)) {
            numStretchy++;
        }
    }
    return numStretchy;
};

// Examples
// expressiveWords("heeellooo", ["hello", "hi", "helo"]) -> 1

// Answer
function expressiveWords2(originalString: string, words: string[]): number {
    // Function to check if target can be stretched to match source string.
    let isStretchy = (source: string, target: string): boolean => {
        let sourceLength = source.length, targetLength = target.length;
      
        // If target is longer than source, it cannot be stretched to match source.
        if (targetLength > sourceLength) return false;
      
        let i = 0, j = 0; // Pointers for source and target strings.
      
        // Iterate over both strings
        while (i < sourceLength && j < targetLength) {
            // If characters at current pointers don't match, return false.
            if (source[i] !== target[j]) return false;
          
            // Count the number of consecutive characters in source.
            let runStartSource = i;
            while (i < sourceLength && source[i] === source[runStartSource]) i++;
            let countSource = i - runStartSource;
          
            // Count the number of consecutive characters in target.
            let runStartTarget = j;
            while (j < targetLength && target[j] === target[runStartTarget]) j++;
            let countTarget = j - runStartTarget;
          
            // Check if the run in source can be stretched to match target's run.
            // If source's run is shorter than target's, or if source's run is not stretchable (countSource < 3) and not equal to target's run, return false.
            if (countSource < countTarget || (countSource < 3 && countSource !== countTarget)) return false;
        }
      
        // If we've reached the end of both source and target, return true.
        return i === sourceLength && j === targetLength;
    };
  
    // Count the number of words that can be stretched.
    let expressiveCount = 0;
    for (const word of words) {
        if (isStretchy(originalString, word)) {
            expressiveCount++;
        }
    }
  
    return expressiveCount;
}
