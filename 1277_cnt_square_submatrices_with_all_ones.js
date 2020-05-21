/*
 * 1277. Count Square Submatrices with All Ones
 *
 * Q: https://leetcode.com/problems/count-square-submatrices-with-all-ones/
 * A: https://leetcode.com/problems/count-square-submatrices-with-all-ones/discuss/442151/Javascript-and-C%2B%2B-solutions
 */

let countSquares = (A, cnt = 0) => {
    let M = A.length,
        N = A[0].length;
    let dp = [...Array(M + 1)].map(row => Array(N + 1).fill(0));
    for (let i = 1; i <= M; ++i)
        for (let j = 1; j <= N; ++j)
            if (A[i - 1][j - 1])
                cnt += dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
    return cnt;
};

// memory optimized to update A in-place
let countSquares = (A, cnt = 0) => {
    let M = A.length,
        N = A[0].length;
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (A[i][j])
                cnt += A[i][j] = 1 + (i && j ? Math.min(A[i][j - 1], A[i - 1][j], A[i - 1][j - 1]) : 0);
    return cnt;
};

let A = [
    [0,0,0],
    [0,1,0],
    [0,1,0],
    [1,1,1],
    [1,1,0]
]
console.log(countSquares(A));