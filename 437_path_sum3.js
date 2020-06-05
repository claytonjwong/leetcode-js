/*
 * 437. Path Sum III
 *
 * Q: https://leetcode.com/problems/path-sum-iii/
 * A: https://leetcode.com/problems/path-sum-iii/discuss/671026/Javascript-and-C%2B%2B-solutions
 */

// concise
let pathSum = (root, T) => {
    let dfs = (root, sum = 0) => !root ? 0
        : Number(sum + root.val == T) + dfs(root.left, sum + root.val) + dfs(root.right, sum + root.val);
    let go = root => !root ? 0 : dfs(root) + go(root.left) + go(root.right);
    return go(root);
};
// verbose
let pathSum = (root, T) => {
    let dfs = (root, sum = 0) => {
        if (!root)
            return 0;
        sum += root.val;
        return Number(sum == T) + dfs(root.left, sum) + dfs(root.right, sum);
    };
    let go = root => {
        if (!root)
            return 0;
        return dfs(root) + go(root.left) + go(root.right);
    };
    return go(root);
};