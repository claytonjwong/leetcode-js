/*
 * 530. Minimum Absolute Difference in BST
 *
 * Q: https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 * A: https://leetcode.com/problems/minimum-absolute-difference-in-bst/discuss/595803/Javascript-and-C%2B%2B-solutions
 */

let getMinimumDifference = (root, set = new Set(), min = Infinity) => {
    let go = root => {
        if (!root)
            return;
        set.add(root.val);
        go(root.left);
        go(root.right);
    }
    go(root);
    [...set].sort((a, b) => a - b).forEach((_, i, A) => {
        if (!i)
            return;
        min = Math.min(min, Math.abs(A[i - 1] - A[i]));
    });
    return min;
};