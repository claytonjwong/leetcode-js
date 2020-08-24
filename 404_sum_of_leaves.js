/*
 * 404. Sum of Left Leaves
 *
 * Q: https://leetcode.com/problems/sum-of-left-leaves/
 * A: https://leetcode.com/problems/sum-of-left-leaves/discuss/809409/Javascript-Python3-C%2B%2B-1-Liners
 */

// 1-liner
let sumOfLeftLeaves = (root, left = false) =>
    !root ? 0 : !root.left && !root.right ? (left ? root.val : 0) : sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);

// verbose
let sumOfLeftLeaves = (root, left = false) => {
    if (!root)
        return 0;
    if (!root.left && !root.right)
        return left ? root.val : 0;
    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};
