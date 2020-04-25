/*
 * 1038. Binary Search Tree to Greater Sum Tree
 *
 * Q: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
 * A: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/discuss/596866/Javascript-and-C%2B%2B-solutions
 */

let bstToGst = (root, sum = 0) => {
    let go = root => {
        if (root.right)
            go(root.right);
        sum += root.val, root.val = sum;
        if (root.left)
            go(root.left);
        return root;
    };
    return go(root);
};