/*
 * 230. Kth Smallest Element in a BST
 *
 * Q: https://leetcode.com/problems/kth-smallest-element-in-a-bst/submissions/
 * A: https://leetcode.com/problems/kth-smallest-element-in-a-bst/discuss/642139/Javascript-and-C%2B%2B-solutions
 */

// array
let kthSmallest = (root, K, A = []) => {
    let go = root => {
        if (root.left) go(root.left);
        A.push(root.val);
        if (root.right) go(root.right);
    };
    go(root);
    return A[K - 1]; // K-th largest 🎯 (-1 for 0-based indexing)
};

// decrement K
let kthSmallest = (root, K, ans = -Infinity) => {
    let go = root => {
        if (K && root.left) go(root.left);
        if (!--K) ans = root.val; // K-th largest 🎯
        if (K && root.right) go(root.right);
    };
    go(root);
    return ans;
};