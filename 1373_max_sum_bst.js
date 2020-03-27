/*
 * 1373. Maximum Sum BST in Binary Tree
 *
 * Q: https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/
 * A: https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/discuss/536727/Javascript-solution-(FAIL-test-case-53-of-55)
 */

// Runtime error occurs, but I think this is an OJ issue!

// let maxSumBST = (root, ans = 0) => {
//     let go = (root, isBST = false, sum = 0) => {
//         let L = { min: Infinity, max: -Infinity, isBST: false, sum: 0 },
//             R = { min: Infinity, max: -Infinity, isBST: false, sum: 0 };
//         if (root.left)  [L.min, L.max, L.isBST, L.sum] = go(root.left);
//         if (root.right) [R.min, R.max, R.isBST, R.sum] = go(root.right);
//         if ((!root.left  || (L.isBST && L.max < root.val))
//          && (!root.right || (R.isBST && R.min > root.val))) {
//             sum = root.val + L.sum + R.sum;
//             ans = Math.max(ans, sum);
//             isBST = true;
//         }
//         let minimum = Math.min(L.min, R.min, root.val),
//             maximum = Math.max(L.max, R.max, root.val);
//         return [minimum, maximum, isBST, sum];
//     };
//     go(root);
//     return ans;
// };

let maxSumBST = (root, max = 0) => {
    let go = (root, isBST = false, sum = 0) => {
        if (!root)
            return [Infinity, -Infinity, true, 0];
        let L = { min: Infinity, max: -Infinity, isBST: false, sum: 0 },
            R = { min: Infinity, max: -Infinity, isBST: false, sum: 0 };
        [L.min, L.max, L.isBST, L.sum] = go(root.left);
        [R.min, R.max, R.isBST, R.sum] = go(root.right);
        if (L.isBST && R.isBST && L.max < root.val && root.val < R.min) {
            sum = root.val + L.sum + R.sum;
            max = Math.max(max, sum);
            isBST = true;
        }
        let minimum = Math.min(L.min, R.min, root.val),
            maximum = Math.max(L.max, R.max, root.val);
        return [minimum, maximum, isBST, sum];
    };
    go(root);
    return max;
};