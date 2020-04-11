/*
 * 543. Diameter of Binary Tree
 *
 * Q: https://leetcode.com/problems/diameter-of-binary-tree/
 * A: https://leetcode.com/problems/diameter-of-binary-tree/discuss/115019/Simple-C%2B%2B-Recursive-Solution
 */

let diameterOfBinaryTree = (root, max = 0) => {
    let go = (root) => {
        let L = root.left  ? 1 + go(root.left)  : 0;
        let R = root.right ? 1 + go(root.right) : 0;
        max = Math.max(max, L + R);
        return Math.max(L, R);
    };
    if (root)
        go(root);
    return max;
};
