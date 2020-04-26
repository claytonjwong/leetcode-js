/*
 * 669. Trim a Binary Search Tree
 *
 * Q: https://leetcode.com/problems/trim-a-binary-search-tree/
 * A: https://leetcode.com/problems/trim-a-binary-search-tree/discuss/599189/Javascript-and-C%2B%2B-solutions
 */

let trimBST = (root, L, R) => {
    if (!root)
        return root;
    let go = root => {
        while (root.left  && root.left.val  < L) root.left  = root.left.right ? root.left.right : null;
        while (root.right && root.right.val > R) root.right = root.right.left ? root.right.left : null;
        if (root.left)  go(root.left);
        if (root.right) go(root.right);
    };
    go(root);
    while (root && root.val < L) root = root.right;
    while (root && root.val > R) root = root.left;
    return root;
};