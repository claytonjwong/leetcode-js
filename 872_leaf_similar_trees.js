/*
 * 872. Leaf-Similar Trees
 *
 * Q: https://leetcode.com/problems/leaf-similar-trees/
 * A: https://leetcode.com/problems/leaf-similar-trees/discuss/152310/Concise-C%2B%2B-recursive-solution
 */

let leafSimilar = (A, B, leaves = { A: [], B: [] }) => {
    let go = (root, leaves = []) => {
        if (!root)
            return;
        if (!root.left && !root.right)
            leaves.push(root.val);
        go(root.left, leaves);
        go(root.right, leaves);
    };
    go(A, leaves.A);
    go(B, leaves.B);
    return leaves.A.join(',') == leaves.B.join(',');
};