// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(); // Placeholder for the result linked list
  let current = dummyHead; // Pointer to build the new linked list
  let carry = 0; // Carry for sums greater than 9

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 ? l1.val : 0; // Value from the first list, or 0 if exhausted
    const val2 = l2 ? l2.val : 0; // Value from the second list, or 0 if exhausted

    const sum = val1 + val2 + carry; // Add digits and carry
    carry = Math.floor(sum / 10); // Update carry
    const digit = sum % 10; // Single digit to store in the new node

    current.next = new ListNode(digit); // Create a new node with the result digit
    current = current.next; // Move the pointer forward

    if (l1) l1 = l1.next; // Move to the next node in l1
    if (l2) l2 = l2.next; // Move to the next node in l2
  }
