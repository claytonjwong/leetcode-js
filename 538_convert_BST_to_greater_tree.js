/*
 * 538. Convert BST to Greater Tree
 *
 * Q: https://leetcode.com/problems/convert-bst-to-greater-tree/
 * A: https://leetcode.com/problems/convert-bst-to-greater-tree/discuss/596870/Javascript-and-C%2B%2B-solutions
 */

let convertBST = (root, sum = 0) => {
    if (!root)
        return root;
    let go = root => {
        if (root.right)
            go(root.right);
        sum += root.val, root.val = sum;
        if (root.left)
            go(root.left);
        return root;
    };
    return go(root);
};