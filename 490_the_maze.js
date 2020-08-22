/*
 * 490. The Maze
 *
 * Q: https://leetcode.com/problems/the-maze/
 * A: https://leetcode.com/problems/the-maze/discuss/806498/Javascript-Python3-C%2B%2B-DFS-solutions
 */

let hasPath = (A, start, target, seen = new Set()) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let go = (i, j) => {
        if (`${i},${j}` == `${target}`)  // 🎯 target
            return true;
        for (let [row, col] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {  // [👆, 👉, 👇, 👈 ]
            let [u, v] = [i, j];
            // 1. 🚌 continue in same direction until 💥 collision
            while (0 <= u && u < M && 0 <= v && v < N && !A[u][v])
                u += row,
                v += col;
            // 2. 🚀 recursively explore previous position proceeding 💥 collision
            u -= row;
            v -= col;
            if (seen.has(`${u},${v}`))
                continue;
            seen.add(`${u},${v}`);
            if (go(u, v))
                return true;
        }
        return false;
    };
    return go(...start);
};
