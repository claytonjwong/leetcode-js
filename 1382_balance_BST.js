/*
 * 1382. Balance a Binary Search Tree
 *
 * Q: https://leetcode.com/problems/balance-a-binary-search-tree/
 * A: https://leetcode.com/problems/balance-a-binary-search-tree/discuss/540272/Javascript-and-C%2B%2B-solutions
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

let balanceBST = (root, A = []) => {
    let go = root => {
        if (root.left) go(root.left);
        A.push(root.val);
        if (root.right) go(root.right);
    };
    go(root);
    let bal = (root = null, i = 0, j = A.length - 1) => {
        let k = Math.floor((i + j) / 2);
        root = new TreeNode(A[k]);
        root.left  = i < k ? bal(root, i, k - 1) : null;
        root.right = k < j ? bal(root, k + 1, j) : null;
        return root;
    };
    return bal();
};