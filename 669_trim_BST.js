/*
 * 669. Trim a Binary Search Tree
 *
 * Q: https://leetcode.com/problems/trim-a-binary-search-tree/
 * A: https://leetcode.com/problems/trim-a-binary-search-tree/discuss/599189/Javascript-Python3-C%2B%2B-Recursive
 */

// concise
let trimBST = (root, lo, hi) => {
    let go = root => {
        while (root.left  && root.left.val < lo)  root.left  = root.left.right ? root.left.right : null;
        while (root.right && hi < root.right.val) root.right = root.right.left ? root.right.left : null;
        if (root.left)  go(root.left);
        if (root.right) go(root.right);
    };
    go(root);
    while (root && root.val < lo) root = root.right;
    while (root && hi < root.val) root = root.left;
    return root;
};

// verbose
let trimBST = (root, lo, hi) => {
    let go = root => {
        if (root.left && root.left.val < lo) {
            let next = root.left.right;
            while (next && next.val < lo)
                next = next.right;
            root.left = next;
        }
        if (root.right && hi < root.right.val) {
            let next = root.right.left;
            while (next && hi < next.val)
                next = next.left;
            root.right = next;
        }
        if (root.left)  go(root.left);
        if (root.right) go(root.right);
    };
    go(root);
    while (root && root.val < lo) root = root.right;
    while (root && hi < root.val) root = root.left;
    return root;
};
