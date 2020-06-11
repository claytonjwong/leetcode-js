/*
 * 1139. Largest 1-Bordered Square
 *
 * Q: https://leetcode.com/problems/largest-1-bordered-square/
 * A: https://leetcode.com/problems/largest-1-bordered-square/discuss/681894/Javascript-and-C%2B%2B-solutions
 */

let largest1BorderedSquare = (A, max = 0) => {
    let M = A.length,
        N = A[0].length;
    let row = [...Array(M)].map(_ => Array(N).fill(0)),
        col = [...Array(M)].map(_ => Array(N).fill(0));
    let ok = (i, j, k) => A[i][j]
        && row[i][j + k] - row[i][j] == k           // top i-th row
        && col[i + k][j] - col[i][j] == k           // left j-th col
        && row[i + k][j + k] - row[i + k][j] == k   // bottom (i + k)-th row
        && col[i + k][j + k] - col[i][j + k] == k;  // right (j + k)-th col
    row[0][0] = A[0][0];
    col[0][0] = A[0][0];
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            row[i][j] = !A[i][j] ? 0 : 1 + (0 <= j - 1 ? row[i][j - 1] : 0), // prefix sequential sums per row
            col[i][j] = !A[i][j] ? 0 : 1 + (0 <= i - 1 ? col[i - 1][j] : 0); // prefix sequential sums per col
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            for (let k = 0; i + k < M && j + k < N; ++k)
                max = Math.max(max, ok(i, j, k) ? k + 1 : 0); // k + 1 for edge end-points inclusive
    return max * max; // max side length squared == max 2D square area 🎯
};
console.log(largest1BorderedSquare([[1,1,1],[1,0,1],[1,1,1]]));
// console.log(largest1BorderedSquare([[0]]));
// console.log(largest1BorderedSquare([[1,1,0,0]]));
// console.log(largest1BorderedSquare([[0,0,0,1]]));