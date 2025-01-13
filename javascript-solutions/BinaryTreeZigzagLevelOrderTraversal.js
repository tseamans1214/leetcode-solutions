// Problem: Binary Tree Zigzag Level Order Traversal
// Description: Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    let result = [];
    let queue = [root];
    let leftToRight = true;  // Flag to track the direction

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelValues = [];

        // Process nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();  // Dequeue the front node
            levelValues.push(node.val);

            // Enqueue left and right children if they exist
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // If the direction is right to left, reverse the current level values
        if (!leftToRight) {
            levelValues.reverse();
        }

        // Add the current level's values to the result
        result.push(levelValues);

        // Toggle the direction for the next level
        leftToRight = !leftToRight;
    }

    return result;
};
