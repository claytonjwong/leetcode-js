/*
 * 944. Rotting Oranges
 *
 * Q: https://leetcode.com/problems/rotting-oranges/
 * A: https://leetcode.com/problems/rotting-oranges/discuss/782008/Javascript-Python3-C%2B%2B-BFS-solutions
 */

let orangesRotting = (A, q = [], seen = new Set(), depth = 0, need = 0) => {
    let M = A.length,
        N = A[0].length;
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (A[i][j] == 1)
                ++need;
            else if (A[i][j] == 2)
                q.push([ i, j ]), seen.add(`${i},${j}`);
    if (!need)
        return 0;
    while (q.length) {
        let k = q.length;
        while (k--) {
            let [i, j] = q.shift();
            for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]])
                if (!(u < 0 || u == M || v < 0 || v == N || seen.has(`${u},${v}`)) && A[u][v] == 1)
                    --need, q.push([ u, v ]), seen.add(`${u},${v}`);
        }
        ++depth;
    }
    return !need ? depth - 1 : -1;
};
