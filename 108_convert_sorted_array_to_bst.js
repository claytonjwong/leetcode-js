/*
 * 108. Convert Sorted Array to Binary Search Tree
 *
 * Q: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * A: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/discuss/694149/Javascript-and-C%2B%2B-solutions
 */

let sortedArrayToBST = A => {
    let N = A.length;
    let go = (i = 0, j = N - 1) => {
        if (j < i)
            return null;
        let k = Math.floor((i + j) / 2);
        let root = new TreeNode(A[k]);
        root.left = go(i, k - 1);
        root.right = go(k + 1, j);
        return root;
    };
    return go();
};