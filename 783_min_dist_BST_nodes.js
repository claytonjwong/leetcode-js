/*
 * 783. Minimum Distance Between BST Nodes
 *
 * Q: https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 * A: https://leetcode.com/problems/minimum-distance-between-bst-nodes/discuss/595813/Javascript-and-C%2B%2B-solutions
 */

let minDiffInBST = (root, A = [], min = Infinity) => {
    let go = root => {
        if (!root)
            return;
        go(root.left);
        A.push(root.val);
        go(root.right);
    }
    go(root);
    A.forEach((_, i, A) => {
        if (i) min = Math.min(min, Math.abs(A[i - 1] - A[i]));
    });
    return min;
};