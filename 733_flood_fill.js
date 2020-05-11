/*
 * 733. Flood Fill
 *
 * Q: https://leetcode.com/problems/flood-fill/
 * A: https://leetcode.com/problems/flood-fill/discuss/626668/Javascript-and-C%2B%2B-solutions
 */

// DFS
let floodFill = (A, row, col, cur, seen = new Set()) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let pre = A[row][col];
    let go = (i = row, j = col) => {
        if (i < 0 || i == M || j < 0 || j == N || A[i][j] != pre || seen.has(`${i},${j}`))
            return;
        seen.add(`${i},${j}`);
        A[i][j] = cur;
        for (let dir of [[-1, 0], [0, 1], [1, 0], [0, -1]]) { // clockwise [👆, 👉, 👇, 👈]
            let u = i + dir[0],
                v = j + dir[1];
            go(u, v);
        }
        return A;
    };
    return go();
};

// BFS
let floodFill = (A, row, col, cur, seen = new Set()) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let pre = A[row][col];
    let q = [[row, col]];
    while (q.length) {
        let [i, j] = q.shift();
        seen.add(`${i},${j}`);
        A[i][j] = cur;
        for (let dir of [[-1, 0], [0, 1], [1, 0], [0, -1]]) { // clockwise [👆, 👉, 👇, 👈]
            let u = i + dir[0],
                v = j + dir[1];
            if (u < 0 || u == M || v < 0 || v == N || A[u][v] != pre || seen.has(`${u},${v}`))
                continue;
            q.push([u, v]);
        }
    }
    return A;
};