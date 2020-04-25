/*
 * 566. Reshape the Matrix
 *
 * Q: https://leetcode.com/problems/reshape-the-matrix/
 * A: https://leetcode.com/problems/reshape-the-matrix/discuss/597018/Javascript-and-C%2B%2B-solutions
 */

let matrixReshape = (A, M, N, f = Math.floor) => {
    let i = A.length,
        j = i ? A[0].length : 0;
    if (i * j != M * N)
        return A;
    let ans = [...Array(M)].map(row => Array(N));
    for (let k = 0; k < M * N; ++k)
        ans[f(k / N)][k % N] = A[f(k / j)][k % j];
    return ans;
}