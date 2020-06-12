/*
 * 542. 01 Matrix
 *
 * Q: https://leetcode.com/problems/01-matrix/
 * A: https://leetcode.com/problems/01-matrix/discuss/682748/Javascript-and-C%2B%2B-solutions
 */

let updateMatrix = (A, q = [], seen = new Set()) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (!A[i][j])
                q.push([i, j]), seen.add(`${i},${j}`);
    let depth = 1;
    while (q.length) {
        let K = q.length;
        while (K--) {
            let [i, j] = q.shift();
            for (let dir of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
                let u = i + dir[0],
                    v = j + dir[1];
                if (0 <= u && u < M && 0 <= v && v < N && !seen.has(`${u},${v}`)) {
                    A[u][v] = depth;
                    q.push([u, v]), seen.add(`${u},${v}`);
                }
            }
        }
        ++depth;
    }
    return A;
};
