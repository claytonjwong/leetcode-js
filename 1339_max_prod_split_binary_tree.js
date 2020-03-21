/*
 * 1339. Maximum Product of Splitted Binary Tree
 *
 * Q: https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/
 * A: https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/discuss/541816/Javascript-and-C%2B%2B-solutions
 */

// let maxProduct = (root, A = [], max = 0) => {
//     let go = root => {
//         if (!root) return 0;
//         A.push(go(root.left) + go(root.right) + root.val);
//         return A[A.length - 1];
//     };
//     let total = go(root);
//     for (let i = 0, N = A.length; i + 1 < N; ++i) // i + 1 to not process root at A[N - 1] (requires 2 cuts)
//         max = Math.max(max, A[i] * (total - A[i]));
//     return max % (1e9 + 7);
// };

let maxProduct = (root, A = [], total = 0, max = 0) => {
    let go = root => !root ? 0 : A[A.push(go(root.left) + go(root.right) + root.val) - 1]; // each ongoing sum is A[A.length - 1]
    total = go(root), A.forEach(x => max = Math.max(max, x * (total - x)));
    return max % (1e9 + 7);
};