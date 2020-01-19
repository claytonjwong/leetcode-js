/*
 * 1293. Shortest Path in a Grid with Obstacles Elimination
 *
 * Q: https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/
 * A: https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/discuss/484985/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[][]} A
 * @param {number} T
 * @return {number}
 */

// accepted DFS
let shortestPath = (A, T, dirs = [[0,1],[1,0],[0,-1],[-1,0]], ans = Infinity) => {
    let M = A.length,
        N = A[0].length;
    let dfs = (i = 0, j = 0, k = 0, steps = 0, seen = new Set([`0,0,0`])) => {
        if (i == M - 1 && j == N - 1) {
            if (ans > steps)
                ans = steps;
            return;
        }
        for (let d of dirs) {
            let u = i + d[0],
                v = j + d[1];
            if (!(0 <= u && u < M && 0 <= v && v < N))
                continue;
            let w = k + A[u][v];
            if (w > T)
                continue;
            let key = `${u},${v},${w}`;
            if (seen.has(key))
                continue;
            seen.add(key);
            dfs(u, v, w, steps + 1, seen);
        }
    }
    dfs();
    return ans < Infinity ? ans : -1;
};


/*
// accepted BFS
let shortestPath = (A, T, dirs = [[-1,0],[0,1],[1,0],[0,-1]]) => {
    let M = A.length,
        N = A[0].length;
    let queue = [[[0, 0, 0], 0]];
    let seen = new Set([`0,0,0`]);
    for (let [[i, j, k], steps] of queue) {
        if (i == M - 1 && j == N - 1)
            return steps;
        for (let d of dirs) {
            let u = i + d[0],
                v = j + d[1];
            if (!(0 <= u && u < M && 0 <= v && v < N))
                continue;
            let w = k + A[u][v];
            if (w > T)
                continue;
            let key = `${u},${v},${w}`;
            if (seen.has(key))
                continue;
            seen.add(key);
            queue.push([[u, v, w], steps + 1]);
        }
    }
    return -1;
};
*/

console.log(shortestPath(
    [[0,0,0],
     [1,1,0],
     [1,1,0]],
     0
));

console.log(shortestPath(
    [[0,0,1,0,0,0,0,1,0,1,1,0,0,1,1],
     [0,0,0,1,1,0,0,1,1,0,1,0,0,0,1],
     [1,1,0,0,0,0,0,1,0,1,0,0,1,0,0],
     [1,0,1,1,1,1,0,0,1,1,0,1,0,0,1],
     [1,0,0,0,1,1,0,1,1,0,0,1,1,1,1],
     [0,0,0,1,1,1,0,1,1,0,0,1,1,1,1],
     [0,0,0,1,0,1,0,0,0,0,1,1,0,1,1],
     [1,0,0,1,1,1,1,1,1,0,0,0,1,1,0],
     [0,0,1,0,0,1,1,1,1,1,0,1,0,0,0],
     [0,0,0,1,1,0,0,1,1,1,1,1,1,0,0],
     [0,0,0,0,1,1,1,0,0,1,1,1,0,1,0]],
    27
))

console.log(shortestPath(
    [[0,0,0],
     [1,1,0],
     [0,0,0],
     [0,1,1],
     [0,0,0]],
    1
));

