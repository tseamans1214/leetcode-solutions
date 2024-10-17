/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }

    let current = head;

    // Traverse the linked list
    while (current && current.next) {
        if (current.val === current.next.val) {
            // Skip the next node because it's a duplicate
            current.next = current.next.next;
        } else {
            // Move to the next distinct node
            current = current.next;
        }
    }

    return head;
};
