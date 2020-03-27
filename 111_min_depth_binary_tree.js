/*
 * 111. Minimum Depth of Binary Tree
 *
 * Q: https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * A: https://leetcode.com/problems/minimum-depth-of-binary-tree/discuss/553010/Javascript-and-C%2B%2B-solutions
 */

var minDepth = root => {
    let go = (root, depth = 1) => {
        if (!root.left && !root.right)
            return depth;
        let L = root.left  ? go(root.left,  depth + 1) : Infinity,
            R = root.right ? go(root.right, depth + 1) : Infinity;
        return Math.min(L, R);
    };
    return root ? go(root) : 0;
};