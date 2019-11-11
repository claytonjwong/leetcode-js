/*
 * 1254. Number of Closed Islands
 *
 * Q: https://leetcode.com/problems/number-of-closed-islands/
 * A: https://leetcode.com/problems/number-of-closed-islands/discuss/425950/Javascript-and-C%2B%2B-solutions
 *
 */

/**
 * @param {number[][]} A
 * @return {number}
 */
var closedIsland = (A, edge=new Set([1]), cand=1) => {
    let dfs = (A, i, j, color, edge, seen) => {
        let key = `[${i},${j}]`;
        if (seen.has(key) || A[i][j] == 1)
            return;
        seen.add(key);
        A[i][j] = color;
        let M = A.length,
            N = A[0].length;
        if (i == 0 || j == 0 || i == M-1 || j == N-1)
            edge.add(color);
        if (i-1 >= 0) dfs(A, i-1, j, color, edge, seen);
        if (j+1 < N)  dfs(A, i, j+1, color, edge, seen);
        if (i+1 < M)  dfs(A, i+1, j, color, edge, seen);
        if (j-1 >= 0) dfs(A, i, j-1, color, edge, seen);
    };
    let M = A.length,
        N = A[0].length;
    for (let i=0; i < M; ++i)
        for (let j=0; j < N; ++j)
            if (A[i][j] == 0)
                dfs(A, i, j,  ++cand, edge, new Set());
    return cand - edge.size;
};
let ans = closedIsland([[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]);
console.log(ans);
