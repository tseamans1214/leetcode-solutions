/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Check if list1 and list2 are equal to null
    if (list1 === null && list2 === null) {
        return null;
    } else if (list1 === null) { // Check if list1 is equal to null
        return list2;
    } else if (list2 === null) {  // Check if list2 is equal to null 
        return list1;
    }
    // Create a new head for combined linkedlist
    var combinedList = new ListNode(0, null);
    var combinedPointer = combinedList;
    // While list1.val != null or list2.val != null
    while (list1 != null || list2 != null) {
        var nextVal = 0;
        //  if list1.val == null
        if (list1 === null) {
            //      set new node val to list2.val
            nextVal = list2.val;
            //      move list2 pointer to next node
            list2 = list2.next;
        } else if (list2 === null) {  //  else if list2.val == null
            //      set new node val to list1.val
            nextVal = list1.val;
            //      move list1 pointer to next node
            list1 = list1.next;
        } else if (list1.val < list2.val) {  //  else if list1.val < list2.val
            //      set new node val to list1.val
            nextVal = list1.val;
            //      move list1 pointer to next node
            list1 = list1.next;
        } else { //  else list2.val < list1.val
            //      set new node val to list2.val
            nextVal = list2.val;
            //      move list2 pointer to next node
            list2 = list2.next;
        }
        // Set current val to next lowest value
        combinedPointer.val = nextVal;
        
        // If there is another element in a list create another node and add it to the list
        if (list1 != null || list2 != null) {
            var newNode = new ListNode(null, null);
            combinedPointer.next = newNode;
            combinedPointer = combinedPointer.next;
        }
    }
    // return head of combined list
    return combinedList;
};
