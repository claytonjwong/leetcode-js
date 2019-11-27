/*
 * 1261. Find Elements in a Contaminated Binary Tree
 *
 * Q: https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/
 * A: https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/discuss/433166/Javascript-and-C%2B%2B-solutions
 */ 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    this.seen = new Set();
    let go = (root, val=0) => {
        this.seen.add(val);
        root.val = val;
        if (root.left) go(root.left, 2*val+1);
        if (root.right) go(root.right, 2*val+2);
    };
    go(root);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.seen.has(target);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */