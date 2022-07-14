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
    // LinkedList
        // # nodes -> [1-100]
    // Parameters
        // ListNode head
            // val -> [1-100]
            // next -> reference to the next node
    // Returns
        // ListNode -> middle node in the LinkedList
            // note: if # of nodes is even, return the second middle node
    
    public ListNode middleNode(ListNode head) {
        
        // Check if linked list is size 1
        if (head.next == null) {
            return head;
        }
        // Find the size of the LinkedList
        int size = 0;
        ListNode temp = new ListNode();
        temp = head;
        while (temp != null) {
            size++;
            temp = temp.next;
        }
        // From size, find the middle
            // Ex: size is 5, middle would be 3
            // Ex: size is 6, middle would be 4
        // To find middle
            // divide size by 2, and add 1
        int middle = (size/2) + 1;
        // Loop through LinkedList, until we reach the middle node
        int i = 1;
        while (i != middle) {
            i++;
            head = head.next;
        }
        // return middle node
        return head;
    }
    // Big O Notation for algorithm
    //  O(n + n/2)
    //  O(n)
    
    // middleNode([1,2,3,4,5]) -> return [3,4,5]
    // middleNode([1,2,3,4,5,6]) -> return [4,5,6]
    // middleNode([1]) -> return [1]
    // middleNode([1,2]) -> return [2]
}
