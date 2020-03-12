/*
 * 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 *
 * Q: https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
 * A: https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/discuss/537655/Javascript-and-C%2B%2B-solutions
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

let getTargetCopy = (a, b, c, ans) => {
    let go = (a, b, c) => {
        if (a == c)
            ans = b;
        if (a.left)
            go(a.left, b.left, c);
        if (a.right)
            go(a.right, b.right, c);
    };
    go(a, b, c);
    return ans;
};