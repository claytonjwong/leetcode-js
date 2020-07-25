/*
 * 200. Number of Islands
 *
 * Q: https://leetcode.com/problems/number-of-islands/
 * A: https://leetcode.com/problems/number-of-islands/discuss/753546/Javascript-Python3-C%2B%2B-DFS-%2B-BFS
 */

// DFS
let numIslands = (A, seen = new Set()) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let go = (i, j) => {
        if (i < 0 || i == M || j < 0 || j == N || A[i][j] == '0' || seen.has(`${i},${j}`)) // 🛑 OOB, water, or already seen 👀
            return 0;
        seen.add(`${i},${j}`);
        for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]]) // 🚀 DFS explore adj u,v [👆, 👉, 👇, 👈]
            go(u, v);
        return 1;
    };
    return M && N ? [...Array(M).keys()].map(i => [...Array(N).keys()].map(j => go(i, j)).reduce((a, b) => a + b)).reduce((a, b) => a + b) : 0;
};

// BFS
let numIslands = (A, seen = new Set(), cnt = 0) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let bfs = (row, col) => {
        if (A[row][col] == '0' || seen.has(`${row},${col}`)) // 🚫 water or already seen 👀
            return 0;
        seen.add(`${row},${col}`);
        let q = [[ row, col ]];
        while (q.length) { // for each i,j 🚌 BFS explore adj u,v [👆, 👉, 👇, 👈 ] if *not* 🛑 OOB, 🚫 water, or already seen 👀
            let [i, j] = q.shift();
            for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]])
                if (!(u < 0 || u == M || v < 0 || v == N || A[u][v] == '0' || seen.has(`${u},${v}`)))
                    q.push([ u, v ]), seen.add(`${u},${v}`);
        }
        return 1;
    };
    return M && N ? [...Array(M).keys()].map(i => [...Array(N).keys()].map(j => bfs(i, j)).reduce((a, b) => a + b)).reduce((a, b) => a + b) : 0;
};
