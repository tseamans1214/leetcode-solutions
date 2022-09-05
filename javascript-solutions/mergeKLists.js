/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length == 0) {
        return null;
    }
    // Create variable for combined list
    var combinedList = new ListNode(null, null);
    // Create pointer for combined list
    var combinedListPointer = combinedList;
    // Previous last used pointer
    var combinedListPointerLast = combinedList;
    // Create variable for smallest current number
    var currentSmallestNum = Math.pow(10,5);
    // Create variable for current index
    var currentIndex = -1;
    var numbersLeft = true;
    var addedNumbers = 0;
    // while there are still numbers in the array of arrays
    while (numbersLeft) {
        numbersLeft = false;
        var newNode = new ListNode(null, null);
        // Find the smallest number in the array is lists
        for (var i=0; i<lists.length; i++) {
            if (lists[i] && lists[i].val < currentSmallestNum) {
                currentSmallestNum = lists[i].val;
                currentIndex = i;
                numbersLeft = true;
                addedNumbers++;
            }
        }
        // If a number is found, add it to the combined list
        if (currentIndex != -1) {
            // Add number to the combined list
            combinedListPointer.val = currentSmallestNum;
            // Move pointer to created empty node
            combinedListPointer.next = newNode;
            // Move last pointer to current pointer
            combinedListPointerLast = combinedListPointer;
            // Move current pointer to created empty node
            combinedListPointer = combinedListPointer.next;
            
            // Move list with number used to next position
            lists[currentIndex] = lists[currentIndex].next;
        }
        // Reset smallest num and current index
        currentSmallestNum = Math.pow(10,5);
        currentIndex = -1;
    }
    // Remove empty last node
    combinedListPointerLast.next = null;
    
    // If numbers were added, return the combined list
    if (addedNumbers > 0) {
        return combinedList;
    } else { // Else return null because there were no numbers
        return null;
    }
};
