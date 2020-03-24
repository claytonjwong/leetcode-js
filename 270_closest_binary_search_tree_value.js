/*
 * 270. Closest Binary Search Tree Value
 *
 * Q2: https://leetcode.com/problems/closest-binary-search-tree-value
 * A2: https://leetcode.com/problems/closest-binary-search-tree-value/discuss/549446/Javascript-and-C%2B%2B-solutions
 */

let closestValue = (root, target, best = Infinity, ans = -1) => {
    let go = root => {
        let diff = Math.abs(target - root.val);
        if (best > diff)
            best = diff,
            ans = root.val;
        if (root.left) go(root.left);
        if (root.right) go(root.right);
    };
    go(root);
    return ans;
};
