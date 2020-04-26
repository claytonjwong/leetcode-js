/*
 * 1143. Longest Common Subsequence
 *
 * Q: https://leetcode.com/problems/longest-common-subsequence/
 * A: https://leetcode.com/problems/longest-common-subsequence/discuss/599042/Javascript-and-C%2B%2B-solutions
 */

// TLE
let longestCommonSubsequence = (A, B) => {
    let go = (i, j) => {
        if (!i || !j)
            return 0;
        return Math.max(
            go(i - 1, j - 1) + (A[i - 1] == B[j - 1]), // match?
            go(i - 1, j), go(i, j - 1),                // indels
        );
    }
    return go(A.length, B.length);
}

// AC
let longestCommonSubsequence = (A, B) => {
    let M = A.length,
        N = B.length;
    let m = [...Array(M + 1)].map(row => Array(N + 1).fill(-1));
    let go = (i, j) => {
        if (m[i][j] > -1)
            return m[i][j];
        if (!i || !j)
            return m[i][j] = 0;
        return m[i][j] = Math.max(
            go(i - 1, j - 1) + (A[i - 1] == B[j - 1]), // match?
            go(i - 1, j), go(i, j - 1),                // indels
        );
    }
    return go(M, N);
}

// AC
let longestCommonSubsequence = (A, B) => {
    let M = A.length,
        N = B.length;
    let dp = [...Array(M + 1)].map(row => Array(N + 1).fill(0));
    for (let i = 1; i <= M; ++i)
        for (let j = 1; j <= N; ++j)
            dp[i][j] = Math.max(
                dp[i - 1][j - 1] + (A[i - 1] == B[j - 1]), // match?
                dp[i - 1][j], dp[i][j - 1],                // indels
            );
    return dp[M][N];
}