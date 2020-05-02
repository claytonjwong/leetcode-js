/*
 * 289. Game of Life
 *
 * Q: https://leetcode.com/problems/game-of-life/
 * A: https://leetcode.com/problems/game-of-life/discuss/607337/Javascript-and-C%2B%2B-solutions
 */

let gameOfLife = B => {
    let M = B.length,
        N = M ? B[0].length : 0;
    let A = [...Array(M)].map(row => Array(N).fill(0)); // case 1 and case 3: dead by default ❌
    B.forEach((row, i) =>
        row.forEach((col, j) => {
            let adj = 0;
            for (let dir of [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]) {
                let u = i + dir[0],
                    v = j + dir[1];
                if (u < 0 || u == M || v < 0 || v == N)
                    continue;
                adj += B[u][v];
            }
            if ((B[i][j] && (adj == 2 || adj == 3)) || (!B[i][j] && adj == 3))
                A[i][j] = 1; // case 2 and case 4: live on ✅
        })
    );
    B.forEach((row, i) => row.forEach((col, j) => B[i][j] = A[i][j]));
};
let B = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0],
];
gameOfLife(B);
B.forEach(row => console.log(...row));