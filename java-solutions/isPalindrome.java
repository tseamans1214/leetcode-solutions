/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        // Parameter contraints
            // 0 <= node.val <= 9
            // # number nodes can be 1 to 10^5
        
        // If the is only one value, return true
        if (head.next == null) {
            return true;
        }
        // Create copy of head to loop through
        ListNode copy = head;
        
        // Create a stack to hold all linkedlist values
        Stack<Integer> stack = new Stack<Integer>();
        
        // Loop through head copy pushing each value to the stack
        while (copy != null) {
            stack.push(copy.val);
            copy = copy.next;
        }
        
        // while the stack is not empty
        while (stack.isEmpty() == false) {
            // if pop value is not equal to head current value, return false
            if (head.val != stack.pop()) {
                return false;
            }
            // set head to its next node
            head = head.next;
        }
        
        // return true because it read the same both directions
        return true;
        
        // Returns
        // true if it is palindrome
        // false if it is not a plaindrome
        // palindrome = reads the same from left to right and right to left
        // ex: 1221
    }
    // Test cases
    // 1->2->2->1 return true
    // 1->2  return false
    // 1->3->1 return true
}
