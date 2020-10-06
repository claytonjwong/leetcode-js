/*
 * 701. Insert into a Binary Search Tree
 *
 * Q: https://leetcode.com/problems/insert-into-a-binary-search-tree/
 * A: https://leetcode.com/problems/insert-into-a-binary-search-tree/discuss/881995/Javascript-Python3-C%2B%2B-Recursive
 */

let insertIntoBST = (root, x) => {
    let go = (root, x) => {
        if (x < root.val) {
            if (root.left)
                go(root.left, x);
            else
                root.left = new TreeNode(x);
        } else {
            if (root.right)
                go(root.right, x);
            else
                root.right = new TreeNode(x);
        }
        return root
    };
    return root ? go(root, x) : new TreeNode(x);
};
