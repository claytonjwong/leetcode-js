/*
 * 52. N-Queens 2
 *
 * Q: https://leetcode.com/problems/n-queens-ii/
 * A: https://leetcode.com/problems/n-queens-ii/discuss/480337/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = (N, cnt = 0) => {
    let A = Array(N).fill(-1); // index is the row and value is the column of each queen
    let ok = (i, j) => {
        if (A[i] > -1 || A.some(col => col == j) || A.some((col, row, A) => col > -1 && Math.abs(row - i) == Math.abs(col - j)))
            return false; // invalid row, col, or diag
        return true;
    };
    let dfs = (i = 0) => {
        if (i == N) {
            ++cnt;
            return;
        }
        for (let j = 0; j < N; ++j) {
            if (!ok(i, j))
                continue;
            A[i] = j,
            dfs(i + 1),
            A[i] = -1;            
        }
    };
    dfs();
    return cnt;
};
console.log(totalNQueens(8));