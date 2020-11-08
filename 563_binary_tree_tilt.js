/*
 * 563. Binary Tree Tilt
 *
 * Q: https://leetcode.com/problems/binary-tree-tilt/
 * A: https://leetcode.com/problems/binary-tree-tilt/discuss/928266/Kt-Js-Py3-Cpp-Post-Order-Traversal
 */

let findTilt = (root, total = 0) => {
    let go = root => {
        if (!root)
            return 0;
        let L = go(root.left),
            R = go(root.right);
        total += Math.abs(L - R);
        return root.val + L + R;
    };
    go(root);
    return total;
};
