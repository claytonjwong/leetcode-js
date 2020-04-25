/*
 * 530. Minimum Absolute Difference in BST
 *
 * Q: https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 * A: https://leetcode.com/problems/minimum-absolute-difference-in-bst/discuss/595803/Javascript-and-C%2B%2B-solutions
 */

let getMinimumDifference = (root, A = [], min = Infinity) => {
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