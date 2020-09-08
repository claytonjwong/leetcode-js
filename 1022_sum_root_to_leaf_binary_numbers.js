/*
 * 1022. Sum of Root To Leaf Binary Numbers
 *
 * Q: https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
 * A: https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/discuss/275849/Javascript-Python3-C%2B%2B-recursive-solutions
 */

let sumRootToLeaf = (root, sum = 0, next = sum => (sum << 1) | root.val) => {
    if (!root) return 0;
    if (!root.left && !root.right) return next(sum);
    return sumRootToLeaf(root.left, next(sum)) + sumRootToLeaf(root.right, next(sum));
};
