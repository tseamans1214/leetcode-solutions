// Problem: Rotate LinkedList
// Description: Given the head of a linked list, rotate the list to the right by k places.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === 0) return head;

    // Step 1: Find the length of the linked list
    let length = 1;
    let current = head;
    while (current.next) {
        current = current.next;
        length++;
    }

    // Step 2: Make the list circular
    current.next = head;

    // Step 3: Find the new tail and new head
    k = k % length; // Handle cases where k is greater than the length of the list
    if (k === 0) {
        current.next = null; // No rotation needed, return original list
        return head;
    }

    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }

    let newHead = newTail.next;
    
    // Step 4: Break the circle
    newTail.next = null;

    return newHead;
};
