/*
 * 463. Island Perimeter
 *
 * Q: https://leetcode.com/problems/island-perimeter/
 * A: https://leetcode.com/problems/island-perimeter/discuss/613726/Javascript-and-C%2B%2B-solutions
 */
// verbose
let islandPerimeter = (A, cnt = 0) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let adj = (i, j) => {
        for (let dir of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
            let u = i + dir[0],
                v = j + dir[1];
            if (u < 0 || u == M || v < 0 || v == N) {
                ++cnt;
                continue;
            }
            cnt += !A[u][v];
        }
    };
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (A[i][j])
                adj(i, j);
    return cnt;
};
// concise
let islandPerimeter = (A, cnt = 0) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (A[i][j])
                for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]])
                    cnt += u < 0 || u == M || v < 0 || v == N || !A[u][v]; // +1 for out-of-bounds xor water 🎯
    return cnt;
};