/*
 * 559. Maximum Depth of N-ary Tree
 *
 * Q: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 * A: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/discuss/596980/Javascript-and-C%2B%2B-solutions
 */

var maxDepth = root => {
    let go = (root, max = 1) => {
        root.children.forEach(child => {
            max = Math.max(max, 1 + go(child));
        });
        return max;
    }
    return !root ? 0 : go(root);
};