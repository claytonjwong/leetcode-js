/*
 * 107. Binary Tree Level Order Traversal II
 *
 * Q: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 * A: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/discuss/716311/Javascript-and-C%2B%2B-solutions
 */

let levelOrderBottom = (root, ans = []) => {
    let go = (root, i = 0) => {
        if (!root)
            return;
        if (i == ans.length)
            ans.push([]);
        ans[i].push(root.val);
        go(root.left, i + 1);
        go(root.right, i + 1);
    };
    go(root);
    return ans.reverse();
};
