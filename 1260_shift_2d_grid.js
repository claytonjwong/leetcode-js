/*
 * 1260. Shift 2D Grid
 *
 * Q: https://leetcode.com/problems/shift-2d-grid/
 * A: https://leetcode.com/problems/shift-2d-grid/discuss/432317/Javascript-and-C%2B%2B-solutions
 */

/*

read MxN input into seq array

split array at k and append prexfix to postfix

write MxN output back into A

*/

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = (A, k, seq=[]) => {
    let M = A.length,
        N = A[0].length;
    k %= (M * N);
    if (k == 0)
        return A;
    for (let i=0; i < M; ++i)
        for (let j=0; j < N; ++j)
            seq.push(A[i][j]);
    let shifted = seq.slice(-k).concat(seq.slice(0, M*N - k));
    let i = 0,
        j = 0;
    let ans = [...Array(M)].map(() => Array(N));
    for (let num of shifted) {
        ans[i][j] = num;
        if (++j == N)
            ++i, j=0;
    }
    return ans;
};
// let ans = shiftGrid([[1],[2],[3],[4],[7],[6], [5]], 23);
let ans = shiftGrid([[100]], 1);
for (let row of ans)
    console.log(row);