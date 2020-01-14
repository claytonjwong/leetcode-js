/*
 * 1314. Matrix Block Sum
 *
 * Q: https://leetcode.com/problems/matrix-block-sum/
 * A: https://leetcode.com/problems/matrix-block-sum/discuss/480496/Javascript-and-C%2B%2B-solutions
 */

 let matrixBlockSum = (A, K) => {
    let M = A.length, N = A[0].length;
    let sum = (i, j, res = 0) => {
        for (let r = Math.max(i - K, 0); r < Math.min(i + K + 1, M); ++r)
            for (let c = Math.max(j - K, 0); c < Math.min(j + K + 1, N); ++c)
                res += A[r][c];
        return res;
    };
    let ans = [...Array(M)].map(row => Array(N));
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            ans[i][j] = sum(i, j);
    return ans;
};