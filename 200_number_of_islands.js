/*
 * 200. Number of Islands
 *
 * Q: https://leetcode.com/problems/number-of-islands/
 * A: https://leetcode.com/problems/number-of-islands/discuss/583920/Javascript-and-C%2B%2B-solutions
 */

let numIslands = (A, seen = new Set(), cnt = 0) => {
    let M = A.length,
        N = !M ? 0 : A[0].length;
    let dfs = (i, j) => {
        if (i == -1 || i == M || j == -1 || j == N || A[i][j] == '0' || seen.has(`${i},${j}`))
            return;
        seen.add(`${i},${j}`);
        for (let [u, v] of [[-1,0],[0,1],[1,0],[0,-1]])
            dfs(i + u, j + v)
    };
    A.forEach((row, i) => {
        row.forEach((col, j) => {
            if (A[i][j] == '1' && !seen.has(`${i},${j}`))
                dfs(i, j), ++cnt;
        });
    });
    return cnt;
};