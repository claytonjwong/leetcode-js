/*
 * 226. Invert Binary Tree
 *
 * Q: https://leetcode.com/problems/invert-binary-tree/
 * A: https://leetcode.com/problems/invert-binary-tree/discuss/664578/Javascript-and-C%2B%2B-solutions
 */

let invertTree = root => {
    if (!root)
        return null;
    if (root.left || root.right)
        [root.left, root.right] = [root.right, root.left]; // swap
    invertTree(root.left);
    invertTree(root.right);
    return root;
};