/*
 * 1457. Pseudo-Palindromic Paths in a Binary Tree
 *
 * Q: https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
 * A: https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/discuss/652445/Javascript-and-C%2B%2B-solutions
 */
let pseudoPalindromicPaths  = (root, m = Array(10).fill(0), odd = 0, ans = 0) => {
    let go = root => {
        odd += ++m[root.val] % 2 ? 1 : -1;
        if (!root.left && !root.right)
            ans += Number(odd <= 1);
        if (root.left) go(root.left);
        if (root.right) go(root.right);
        odd += --m[root.val] % 2 ? 1 : -1;
    };
    go(root);
    return ans;
};