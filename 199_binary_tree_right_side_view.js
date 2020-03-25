/*
 * 199. Binary Tree Right Side View
 *
 * Q: https://leetcode.com/problems/binary-tree-right-side-view/
 * A: https://leetcode.com/problems/binary-tree-right-side-view/discuss/56023/Simple-C%2B%2B-using-depth-list
 */

let rightSideView = (root, D = []) => {
    let go = (root, depth = 0) => {
        if (!root)
            return;
        if (D.length == depth)
            D.push([]);
        D[depth].push(root.val);
        go(root.left, depth + 1);
        go(root.right, depth + 1);
    };
    go(root);
    return D.map(row => row[row.length - 1]);
};