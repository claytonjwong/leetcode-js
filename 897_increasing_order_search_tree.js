/*
 * 897. Increasing Order Search Tree
 *
 * Q: https://leetcode.com/problems/increasing-order-search-tree/
 * A: https://leetcode.com/problems/increasing-order-search-tree/discuss/165898/Kt-Js-Py3-Cpp-solutions
 */

let increasingBST = (root, A = []) => {
    let go = root => {
        if (!root)
            return;
        go(root.left);
        A.push(root);
        go(root.right);
        root.left = root.right = null;
    };
    go(root);
    let sentinel = new TreeNode(-1),
        cur = sentinel;
    A.forEach(root => cur = cur.right = root);
    return sentinel.right;
};
