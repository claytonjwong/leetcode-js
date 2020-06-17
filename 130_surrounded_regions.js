/*
 * 130. Surrounded Regions
 *
 * Q: https://leetcode.com/problems/surrounded-regions/
 * A: https://leetcode.com/problems/surrounded-regions/discuss/692095/Javascript-and-C%2B%2B-solutions
 */

// DFS
let solve = (A, q = [], seen = new Set()) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let queueBorderCell = (i, j) => {
        A[i][j] = 'b';
        q.push([i, j]);
        seen.add(`${i},${j}`);
    };
    A.forEach((row, i) => row.forEach((col, j) => {
        if (A[i][j] == 'O' && (!i || !j || i == M - 1 || j == N - 1))
            queueBorderCell(i, j); // border cell 🎯
    }));
    while (q.length) {
        let [i, j] = q.shift();
        for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]])
            if (0 <= u && u < M && 0 <= v && v < N && A[u][v] == 'O')
                queueBorderCell(u, v); // border cell 🎯
    }
    A.forEach((row, i) => row.forEach((col, j) => A[i][j] = A[i][j] == 'b' ? 'O' : 'X')); // set border cells: 'b' 👉 'O'
};

// BFS
let solve = (A, q = [], seen = new Set()) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let queueBorderCell = (i, j) => {
        A[i][j] = 'b';
        q.push([i, j]);
        seen.add(`${i},${j}`);
    };
    A.forEach((row, i) => row.forEach((col, j) => {
        if (A[i][j] == 'O' && (!i || !j || i == M - 1 || j == N - 1))
            queueBorderCell(i, j); // border cell 🎯
    }));
    while (q.length) {
        let [i, j] = q.shift();
        for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]])
            if (0 <= u && u < M && 0 <= v && v < N && A[u][v] == 'O')
                queueBorderCell(u, v); // border cell 🎯
    }
    A.forEach((row, i) => row.forEach((col, j) => A[i][j] = A[i][j] == 'b' ? 'O' : 'X')); // set border cells: 'b' 👉 'O'
};