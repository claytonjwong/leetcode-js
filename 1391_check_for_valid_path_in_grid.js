/*
 * 1391. Check if There is a Valid Path in a Grid
 *
 * Q: https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/
 * A: https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/discuss/547872/Javascript-and-C%2B%2B-solutions
 */

let hasValidPath = A => {
    let dir = [
        [],                  // 0 sentinel
        [[ 0, -1], [ 0, 1]], // 1 left  👈 / 👉 right
        [[-1,  0], [ 1, 0]], // 2 upper 👆 / 👇 lower
        [[ 0, -1], [ 1, 0]], // 3 left  👈 / 👇 lower
        [[ 0,  1], [ 1, 0]], // 4 right 👉 / 👇 lower
        [[ 0, -1], [-1, 0]], // 5 left  👈 / 👆 upper
        [[ 0,  1], [-1, 0]], // 6 right 👉 / 👆 upper
    ];
    let M = A.length,
        N = A[0].length;
    let seen = new Set([`0,0`]);
    let q = [[0, 0]];
    while (q.length > 0) {
        let [m, n] = q[0]; q.shift();
        if (m == M - 1 && n == N - 1) // target 🎯
            return true;
        let cand = dir[A[m][n]]; // next candidates from current m,n
        for (let [u, v] of cand) {
            let i = u + m, // next i
                j = v + n; // next j
            if (i < 0 || i >= M || j < 0 || j >= N || seen.has(`${i},${j}`))
                continue;
            let next = dir[A[i][j]];
            for (let [a, b] of next)
                if (a + i == m && b + j == n) // next i,j has incoming route from current m,n 👍
                    seen.add(`${i},${j}`),
                    q.push([i, j]);
        }
    }
    return false;
};