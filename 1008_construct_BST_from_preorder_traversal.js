/*
 * 1008. Construct Binary Search Tree from Preorder Traversal
 *
 * Q: https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
 * A: https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/discuss/252236/Concise-C%2B%2B
 */

let bstFromPreorder = A => {
    let root = new TreeNode(A[0]);
    let add = (root, x) => {
        if (root.val > x) {
            if (!root.left) {
                root.left = new TreeNode(x);
                return;
            }
            add(root.left, x);
        } else {
            if (!root.right) {
                root.right = new TreeNode(x);
                return;
            }
            add(root.right, x);
        }
    };
    for (let i = 1; i < A.length; ++i)
        add(root, A[i]);
    return root;
};