/*
 * Uber- Online Assessment
 * Completed June 4, 2020 5:50 PM
 * 72%
 * Your interview score of 6.09/10 beats 72% of all users.
 * Time Spent: 35 minutes 2 seconds
 * Time Allotted: 1 hour
 */

/*
 * 243. Shortest Word Distance
 *
 * Q: https://leetcode.com/problems/shortest-word-distance-iii/
 * A: https://leetcode.com/problems/shortest-word-distance/discuss/670999/Javascript-and-C%2B%2B-solutions
 */
let shortestDistance = (A, s, t, min = Infinity) => {
    let N = A.length,
        i = -1,
        j = -1;
    for (let k = 0; k < N; ++k) {
        if (A[k] == s) i = k;
        if (A[k] == t) j = k;
        if (0 <= i && 0 <= j)
            min = Math.min(min, Math.abs(i - j));
    }
    return min;
};

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