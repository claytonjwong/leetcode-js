/*
 * 1457. Pseudo-Palindromic Paths in a Binary Tree
 *
 * Q: https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
 * A: https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/discuss/652445/Kt-Js-Py3-Cpp-Map
 */

let pseudoPalindromicPaths = (root, m = new Map(), odd = 0, paths = 0) => {
    let go = root => {
        let x = root.val;
        m.set(x,  1 + (m.get(x) || 0)), odd += m.get(x) & 1 ? 1 : -1;
        if (!root.left && !root.right)
            paths += odd <= 1;
        if (root.left)  go(root.left);
        if (root.right) go(root.right);
        m.set(x, -1 + (m.get(x) || 0)), odd += m.get(x) & 1 ? 1 : -1;
    };
    go(root);
    return paths;
};
