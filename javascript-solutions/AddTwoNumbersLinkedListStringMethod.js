/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 // l1 - Linked list containing number's digits (left to right)
 // l2 - Linked list containing number's digits (left to right)
var addTwoNumbers = function(l1, l2) {
    let num1String = "";
    let num2String = "";
    // Loop through both lists, creating a string out of both in reverse
    while (l1 != null || l2 != null) {
        if (l1) {
            num1String = l1.val + num1String;
            l1 = l1.next;
        }
        if (l2) {
            num2String = l2.val + num2String;
            l2 = l2.next;
        }
    }
    // Convert to integers and sum the two numbers
    let sumString = "" + (BigInt(num1String) + BigInt(num2String));

    // Create a new link list putting the numbers of the sum in opposite order
    let sumLinkedList = new ListNode();
    let currentNode = sumLinkedList;
    for (let i=sumString.length-1; i>-1; i--) {
        currentNode.val = parseInt(sumString[i]);
        if (i > 0) currentNode.next = new ListNode();
        currentNode = currentNode.next;
    }

    // Return the result linked list
    return sumLinkedList;
};
// addTwoNumber([2,4,3], [5,6,4]) -> 342 + 465 = 807
