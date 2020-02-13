/*
 * 304. Range Sum Query 2D - Immutable
 *
 * Q: https://leetcode.com/problems/range-sum-query-2d-immutable/
 * A: https://leetcode.com/problems/range-sum-query-2d-immutable/discuss/508260/Javascript-and-C%2B%2B-solutions
 */

class NumMatrix {
    constructor(A) {
        let M = A.length,
            N = M ? A[0].length : 0;
        this.dp = [...Array(M + 1)].map(row => Array(N + 1).fill(0));
        for (let i = 1; i <= M; ++i)
            for (let j = 1; j <= N; ++j)
                this.dp[i][j] = A[i - 1][j - 1] + this.dp[i][j - 1] + this.dp[i - 1][j] - this.dp[i - 1][j - 1];
    }
    sumRegion(i, j, u, v) {
        return this.dp[u + 1][v + 1] - this.dp[i][v + 1] - this.dp[u + 1][j] + this.dp[i][j];
    }
};
let A = [
    [1,1,1],
    [1,1,1],
    [1,1,1],
];
let m = new NumMatrix(A);
console.log(m.sumRegion(0,0,1,1));
console.log(m.sumRegion(1,1,2,2));