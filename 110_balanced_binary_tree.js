/*
 * 110. Balanced Binary Tree
 *
 * Q: https://leetcode.com/problems/balanced-binary-tree/
 * A: https://leetcode.com/problems/balanced-binary-tree/discuss/981963/Kt-Js-Py3-Cpp-Post-Order-Traversal
 */

let isBalanced = (root, ok = true) => {
    let go = root => {
        if (!root)
            return 0;
        let L = 1 + go(root.left),
            R = 1 + go(root.right);
        if (1 < Math.abs(L - R))
            ok = false;
        return Math.max(L, R);
    };
    go(root);
    return ok;
};
