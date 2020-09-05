/*
 * 1572. Matrix Diagonal Sum
 *
 * Q: https://leetcode.com/problems/matrix-diagonal-sum/
 * A: https://leetcode.com/problems/matrix-diagonal-sum/discuss/830407/Javascript-Python3-C%2B%2B-solutions
 */

 // 1-liner
 let diagonalSum = (A, N = A.length, f = Math.floor) => _.sum(A.map((_, i) => A[i][i] + A[i][N - 1 - i])) - (N & 1 ? A[f(N / 2)][f(N / 2)] : 0);

 // verbose
 let diagonalSum = (A, sum = 0, f = Math.floor) => {
    let N = A.length;
    for (let i = 0; i < N; ++i)
        sum += A[i][i] + A[i][N - 1 - i];  // 🎯 accumulate sum of both diagonals simultaneously
    if (N & 1)
        sum -= A[f(N / 2)][f(N / 2)];      // ⭐️ subtract middle element once if it was added twice
    return sum;
};
