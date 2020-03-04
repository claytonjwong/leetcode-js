/*
 * 200. Number of Islands
 *
 * Q: https://leetcode.com/problems/number-of-islands/
 * A: https://leetcode.com/problems/number-of-islands/discuss/528817/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {character[][]} grid
 * @return {number}
 */

// let numIslands = (A, color = 0, seen = new Set(), dirs = [[-1,0],[0,1],[1,0],[0,-1]]) => {
//     let M = A.length,
//         N = M == 0 ? 0 : A[0].length;
//     let bfs = (i, j) => {
//         let q = [[i, j]];
//         seen.add(`${i},${j}`);
//         while (q.length > 0) {
//             let [i, j] = q[0]; q.shift();
//             A[i][j] += color;
//             for (let dir of dirs) {
//                 let u = i + dir[0],
//                     v = j + dir[1];
//                 if (u < 0 || u >= M || v < 0 || v >= N || A[u][v] != '1' || seen.has(`${u},${v}`))
//                     continue;
//                 q.push([u, v]);
//                 seen.add(`${u},${v}`);
//             }
//         }
//     };
//     for (let i = 0; i < M; ++i)
//         for (let j = 0; j < N; ++j)
//             if (A[i][j] == '1')
//                 ++color, bfs(i, j);
//     return color;
// };

let numIslands = (A, color = 0, seen = new Set(), dirs = [[-1,0],[0,1],[1,0],[0,-1]]) => {
    let M = A.length,
        N = M == 0 ? 0 : A[0].length;
    let bfs = (i, j) => {
        let q = [[i, j]];
        seen.add(`${i},${j}`);
        while (q.length > 0) {
            let [i, j] = q[0]; q.shift();
            A[i][j] += color;
            for (let dir of dirs) {
                let u = i + dir[0],
                    v = j + dir[1];
                if (u < 0 || u >= M || v < 0 || v >= N || A[u][v] != '1' || seen.has(`${u},${v}`))
                    continue;
                q.push([u, v]);
                seen.add(`${u},${v}`);
            }
        }
    };
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (A[i][j] == '1')
                ++color, bfs(i, j);
    return color;
};