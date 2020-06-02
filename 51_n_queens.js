/*
 * 51. N-Queens
 *
 * Q: https://leetcode.com/problems/n-queens/
 * A: https://leetcode.com/problems/n-queens/discuss/480335/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = (N, ans = []) => {
    let A = Array(N).fill(-1); // index is the row and value is the column of each queen
    let ok = (i, j) => {
        if (A[i] > -1 || A.some(col => col == j) || A.some((col, row, A) => col > -1 && Math.abs(row - i) == Math.abs(col - j)))
            return false; // invalid row, col, or diag
        return true;
    };
    let dfs = (i = 0) => {
        if (i == N) {
            ans.push([...A]);
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
    let init = Array(N).fill('.'); // initial empty row of board
    return ans.map(board => board.map(j => {
        let row = [...init];
        row[j] = 'Q';
        return row.join('');
    }));
};

let ans = solveNQueens(8);
for (let x of ans) {
    for (let row of x)
        console.log(row);
    console.log('\n')
}
