/*
 * 270. Closest Binary Search Tree Value
 *
 * Q2: https://leetcode.com/problems/closest-binary-search-tree-value
 * A2: https://leetcode.com/problems/closest-binary-search-tree-value/discuss/549446/Javascript-and-C%2B%2B-solutions
 */

let closestValue = (root, T, best = Infinity) => {
    let go = root => {
        if (!root)
            return;
        if (Math.abs(root.val - T) < Math.abs(best - T))
            best = root.val;
        go(root.left);
        go(root.right);
    };
    go(root);
    return best;
};
