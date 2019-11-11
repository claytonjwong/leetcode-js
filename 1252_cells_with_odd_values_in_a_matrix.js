/*
 * 1252. Cells with Odd Values in a Matrix
 *
 * Q: https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
 * A: https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/discuss/425900/Javascript-and-C%2B%2B-solutions
 * 
 */

/**
 * @param {number} M
 * @param {number} N
 * @param {number[][]} A
 * @return {number}
 */
var oddCells = function(M, N, A, odd=0) {
    let m = [...Array(M)].map(() => Array(N).fill(0));
    for (let [r, c] of A) {
        for (let i=0; i < M; ++i) ++m[i][c];
        for (let j=0; j < N; ++j) ++m[r][j];
    }
    for (let row of m)
        odd += [...row].filter(x => x % 2).length;
    return odd;
};
let ans = oddCells(2, 3, [[0,1],[1,1]]);
console.log(ans);
