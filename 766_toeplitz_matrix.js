/*
 * 766. Toeplitz Matrix
 *
 * Q: https://leetcode.com/contest/weekly-contest-68/problems/toeplitz-matrix/
 * A: https://leetcode.com/problems/toeplitz-matrix/discuss/682523/Javascript-and-C%2B%2B-solutions
 */

let isToeplitzMatrix = A => {
    let M = A.length,
        N = A[0].length;
    for (let i = 1; i < M; ++i)
        for (let j = 1; j < N; ++j)
            if (A[i - 1][j - 1] != A[i][j])
                return false;
    return true;
};