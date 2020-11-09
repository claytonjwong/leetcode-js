/*
 * 1026. Maximum Difference Between Node and Ancestor
 *
 * Q: https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
 * A: https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/discuss/390492/Kt-Js-Py3-Cpp-Pre-Order-Traversal
 */

let maxAncestorDiff = root => {
    let go = (root, lo, hi) => {
        if (!root)
            return Math.abs(lo - hi);
        lo = Math.min(lo, root.val);
        hi = Math.max(hi, root.val);
        return Math.max(go(root.left, lo, hi), go(root.right, lo, hi));
    };
    return go(root, root.val, root.val);
};
