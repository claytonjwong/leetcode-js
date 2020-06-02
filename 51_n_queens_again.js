/*
 * 51. N-Queens
 *
 * Q: https://leetcode.com/problems/n-queens/
 * A: https://leetcode.com/problems/n-queens/discuss/480335/Javascript-and-C%2B%2B-solutions
 */

let solveNQueens = (N, ans = []) => {
    let row = Array(N).fill(-1),
        init = Array(N).fill('.');
    let ok = (i, abs = Math.abs) => {
        if (row.filter(j => j == row[i]).length > 1)
            return false; // same j-th column ❌
        for (let k = 0; k < N; ++k) {
            if (i == k || row[k] == -1)
                continue;
            if (abs(i - k) == abs(row[i] - row[k]))
                return false; // same diagonal ❌
        }
        return true;
    };
    let go = (i = 0) => {
        if (i == N) {
            ans.push([...row]);
            return;
        }
        for (let j = 0; j < N; ++j) {
            row[i] = j;
            if (ok(i))
                go(i + 1);
            row[i] = -1;
        }
    };
    go();
    return ans.map(board => board.map(j => {
        let row = [...init];
        row[j] = 'Q';
        return row.join('');
    }));
};
console.log(...solveNQueens(4))