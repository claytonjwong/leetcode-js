/*
 * 1368. Minimum Cost to Make at Least One Valid Path in a Grid
 *
 * Q: https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
 * A: https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/discuss/529142/Javascript-and-C%2B%2B-solutions
 */

/*

//
// incorrect algorithm
//

top-down DP w/ memo

sub-problem: for row i, col j -> how many sign changes are needed to reach row i + 1, col N - 1 ?

generically for any i, j:

the cost to reach the cell to the right, i, j + 1 is
    0 if the cell points to the right
    1 otherwise
    
the cost to reach the cell below, i + 1, j is
    0 if the cell points down
    1 otherwise

//
// correct algorithm
//

above approach doesn't seem to be helpful for winding cases, lets try BFS / DFS instead...

we can perform BFS from the top-left to the bottom-right cell using i,j,k as row,col,cost
where cost is the count of sign changes along the path

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

// let minCost = A => {
//     let bfs = (dirs = [[], [0, 1], [0, -1], [1, 0], [-1, 0]]) => { // [sentinel, 👉, 👈, 👇, 👆]
//         let M = A.length,
//             N = A[0].length;
//         let best = [...Array(M)].map(row => Array(N).fill(Infinity));
//         let q = [[0, 0, 0]];
//         let seen = new Set([`0,0,0`]);
//         while (q.length > 0) {
//             let [i, j, k] = q[0]; q.shift();
//             if (best[i][j] < k)
//                 continue;
//             best[i][j] = k
//             for (let d = 1; d < dirs.length; ++d) {
//                 let u = i + dirs[d][0],
//                     v = j + dirs[d][1],
//                     w = k + (d == A[i][j] ? 0 : 1);
//                 if (u < 0 || u >= M || v < 0 || v >= N || seen.has(`${u},${v},${w}`))
//                     continue;
//                 q.push([u, v, w]);
//                 seen.add(`${u},${v},${w}`);
//             }
//         }
//         return best[M - 1][N - 1];
//     };
//     return bfs();
// };

let minCost = A => {
    let bfs = (dirs = [[], [0, 1], [0, -1], [1, 0], [-1, 0]]) => { // [sentinel, 👉, 👈, 👇, 👆]
        let M = A.length,
            N = A[0].length;
        let best = [...Array(M)].map(row => Array(N).fill(Infinity));
        let q = [[0, 0, 0]];
        let seen = new Set([`0,0,0`]);
        while (q.length > 0) {
            let [i, j, k] = q[0]; q.shift();
            if (best[i][j] < k)
                continue;
            best[i][j] = k
            for (let d = 1; d < dirs.length; ++d) {
                let cost = d == A[i][j] ? 0 : 1;
                let u = i + dirs[d][0],
                    v = j + dirs[d][1],
                    w = k + cost;
                if (u < 0 || u >= M || v < 0 || v >= N || seen.has(`${u},${v},${w}`))
                    continue;
                if (cost)
                    q.push([u, v, w]);
                else
                    q.unshift([u, v, w]);
                seen.add(`${u},${v},${w}`);
            }
        }
        return best[M - 1][N - 1];
    };
    return bfs();
};

console.log(minCost([[1,3,3,3],[2,2,1,2],[4,3,3,4],[3,2,2,3],[3,2,1,3],[4,1,4,3],[3,3,1,2]]));
// console.log(minCost(
//     [
//         [👉,👇,👇,👇],
//         [👈,👈,👉,👈],
//         [👆,👇,👇,👆],
//         [👇,👈,👈,👇],
//         [👇,👈,👉,👇],
//         [👆,👉,👆,👇],
//         [👇,👇,👉,👈]]
// ));

// console.log(minCost(
//     [     0   1  2  3
//         0[👉,👇,  ,  ],
//         1[  ,👈,  ,  ],
//         2[  ,👇,  ,  ],
//         3[👇,👈,  ,  ],
//         4[👇,  ,👉,👇],
//         5[👆,👉,👆,👇],
//         6[  ,  ,  ,👈]]
// ));