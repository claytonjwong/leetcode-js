/*
 * 64. Minimum Path Sum
 *
 * Q: https://leetcode.com/problems/minimum-path-sum/
 * A: https://leetcode.com/problems/minimum-path-sum/discuss/23460/C%2B%2B-Top-Down-Recursion-and-Bottom-Up-DP
 */

 // top-down
let minPathSum = A => {
    let M = A.length,
        N = A[0].length;
    let dp = [...Array(M)].map(row => Array(N).fill(-1));
    let go = (i, j, res = -1) => {
        if (dp[i][j] > -1)
            return dp[i][j];
        if (!i && !j)
            return dp[i][j] = A[0][0];
        if (!i) res = A[i][j] + go(i, j - 1);
        if (!j) res = A[i][j] + go(i - 1, j);
        if (i && j) res = A[i][j] + Math.min(go(i, j - 1), go(i - 1, j));
        return dp[i][j] = res;
    }
    return go(M - 1, N - 1);
};

// bottom-up
let minPathSum = A => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let dp = [...A];
    for (let i = 1; i < M; ++i) dp[i][0] += dp[i - 1][0];
    for (let j = 1; j < N; ++j) dp[0][j] += dp[0][j - 1];
    for (let i = 1; i < M; ++i)
        for (let j = 1; j < N; ++j)
            dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1])
    return dp[M - 1][N - 1];
};

// bottom-up memory optimized
let minPathSum = A => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let pre = Array(N),
        cur = Array(N);
    pre[0] = A[0][0];
    for (let j = 1; j < N; ++j)
        pre[j] = pre[j - 1] + A[0][j];
    for (let i = 1; i < M; ++i) {
        cur[0] = pre[0] + A[i][0];
        for (let j = 1; j < N; ++j)
            cur[j] = A[i][j] + Math.min(pre[j], cur[j - 1]);
        [cur, pre] = [pre, cur];
    }
    return pre[N - 1];
}