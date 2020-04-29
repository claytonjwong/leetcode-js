/*
 * 124. Binary Tree Maximum Path Sum
 *
 * Q: https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * A: https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/603372/Javascript-and-C%2B%2B-solutions
 */

let maxPathSum = root => {
    let max = root.val;
    let go = root => {
        let L = root.left ? go(root.left) : 0,
            R = root.right ? go(root.right) : 0;
        max = Math.max(max,
            root.val,
            root.val + L,
            root.val + R,
            root.val + L + R
        );
        return Math.max(
            root.val,
            root.val + L,
            root.val + R
        );
    };
    go(root);
    return max;
};