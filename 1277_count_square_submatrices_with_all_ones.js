/*
 * 1277. Count Square Submatrices with All Ones
 *
 * Q: https://leetcode.com/problems/count-square-submatrices-with-all-ones/
 * A: https://leetcode.com/problems/count-square-submatrices-with-all-ones/discuss/442151/Javascript-and-C%2B%2B-solutions
 */

/*
let countSquares = (A, ans=0) => {
    let [M, N] = [A.length, A[0].length];
    for (let i=1; i < M; ++i)
        for (let j=1; j < N; ++j)
            if (A[i][j] && A[i-1][j] && A[i][j-1] && A[i-1][j-1])
                A[i][j] = 1 + Math.min(A[i-1][j], A[i][j-1], A[i-1][j-1]);
    for (let row of A)
        ans += row.reduce((a, b) => a + b);
    return ans;
};
*/

let countSquares = (A, ans=0) => {
    let [M, N] = [A.length, A[0].length];
    for (let i=0; i < M; ++i)
        for (let j=0; j < N; ans += A[i][j++])
            if (i && j && A[i][j] && A[i-1][j] && A[i][j-1] && A[i-1][j-1])
                A[i][j] = 1 + Math.min(A[i-1][j], A[i][j-1], A[i-1][j-1]);
    return ans;
};
