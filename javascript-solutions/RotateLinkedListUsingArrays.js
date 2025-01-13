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
    // Check Edge Cases
    if (head == null || head.next == null || k == 0) { return head; }

    // Find the length of the linked list by adding values to an array
    let arr = [];
    let tempNode = head;
    while (tempNode != null) {
        arr.push(tempNode.val);
        tempNode = tempNode.next;
    }
    let n = arr.length;
    // If k === n, then return original list
    if (k === n) return head;

    // If k > n, then reduce k to k % n. (To prevent repetitive rotations)
    if (k > n) k = k % n;

    // Rotate constructed array by remaining k rotations
    let rotatedArray = [...arr.slice(arr.length - k, arr.length), ...arr.slice(0, arr.length - k)];

    // Create LinkedList with rotated array
    let rotatedLinkedList = new ListNode();
    tempNode = rotatedLinkedList;
    for (let i=0; i<n; i++) {
        tempNode.val = rotatedArray[i];
        if (i !== n-1) {
            tempNode.next = new ListNode();
            tempNode = tempNode.next;
        }
    }

    // Return new Linkedlist
    return rotatedLinkedList;
};
