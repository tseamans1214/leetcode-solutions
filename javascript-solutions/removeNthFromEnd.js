/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var tempPointer = head;
    var i = 1;
    // Count number of items in linked list
    while (tempPointer.next != null ) {
        tempPointer = tempPointer.next;
        i++;
    }
    // If there is only one item and n=1, remove only item
    if (i== 1 && n == 1) {
        return null;
    }
    // If the size is equal to n, remove first item
    if (i-n == 0) {
        head = head.next;
        return head;
    }
    var j = 1;
    tempPointer = head;
    // Loop until pointer is on item before nth item
    while (j != i-n) {
        tempPointer = tempPointer.next;
        j++;
    }
    // Set next to item after item to be removed
    tempPointer.next = tempPointer.next.next;
    return head;
};
