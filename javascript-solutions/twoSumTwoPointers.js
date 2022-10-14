/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let startIndex = 0;
    let endIndex = numbers.length-1;
    // While the start and end indices are not equal to the target number
    while (numbers[startIndex] + numbers[endIndex] !== target) {
        // If added up and they are less than the target
        //  move start index up
        if (numbers[startIndex] + numbers[endIndex] < target) {
            startIndex++
        } 
        // else added up they are greater than the target
        //  so move end index down
        else {
            endIndex--;
        }
    }
    return [startIndex+1, endIndex+1];
};
