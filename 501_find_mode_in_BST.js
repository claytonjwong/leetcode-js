/*
 * 501. Find Mode in Binary Search Tree
 *
 * Q: https://leetcode.com/problems/find-mode-in-binary-search-tree/
 * A: https://leetcode.com/problems/find-mode-in-binary-search-tree/discuss/595358/Javascript-and-C%2B%2B-solutions
 */

let findMode = function(root, m = new Map(), max = 0) {
    let go = root => {
        if (!root)
            return;
        m.set(root.val, 1 + (m.get(root.val) || 0));
        max = Math.max(max, m.get(root.val));
        go(root.left);
        go(root.right);
    };
    go(root);
    return [...m.entries()].filter(e => e[1] == max).map(e => e[0]);
};