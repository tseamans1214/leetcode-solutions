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
import java.lang.Number;
import java.math.BigInteger;
class Solution {
    // Parameters
        // l1,l2 -> linked lists with digits stored in reverse order
        // #nodes >= 1
        // 0 >= nodeVal <= 9
            // Example: 
                // l1 2 -> 4 -> 3 = 342
                // l2 5 -> 6 -> 4 = 465
    // Return linkedlist
        //  l1 + l2
        //  = 342 + 465 = 807
        // linkedlist returned: 7 -> 0 -> 8
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // String for l1
        String string1 = "";
        // String for l2
        String string2 = "";
        
        // Loop through l1 and l2
        while (l1 != null || l2 != null) {
            // if (l1.val != null)
            if (l1 != null) {
                // string1 = l1.val + string1
                string1 = l1.val + string1;
                // move head to next
                l1 = l1.next;
            }
            // if (l2.val != null)
            if (l2 != null) {
                // string2 = l2.val + string2
                string2 = l2.val + string2;
                // move head to next
                l2 = l2.next;
            }
        }
        
        // convert string1 and string2 to ints
        BigInteger num1 = new BigInteger(string1);
        BigInteger num2 = new BigInteger(string2);
        // sum ints together
        BigInteger sum = new BigInteger("0");
        sum = sum.add(num1);
        sum = sum.add(num2);
        // create node to return
        ListNode result = new ListNode();
        // convert sum to string
        String sumString = "" + sum;
        // Add first digit to result
        result.val = Integer.parseInt(sumString.charAt(0) + "");
        // looping from the the end of the string
        for (int i=1; i<sumString.length(); i++) {
            // Create new node with current digit
            ListNode newNode = new ListNode(Integer.parseInt(sumString.charAt(i) + ""));
            // Set next of newNode to head
            newNode.next = result;
            // Set head to newNode
            result = newNode;
        }
        return result;
            
    }
    
    // Test Cases
        // l1 -> 1
        // l2 -> 3
        // result -> 4
        
        // l1 -> 3 -> 2
        // l2 -> 2 -> 1
        // result 23 + 12 = 35
            // result linkedlist -> 5 -> 3
}
