/*
 * 1329. Sort the Matrix Diagonally
 *
 * Q: https://leetcode.com/problems/sort-the-matrix-diagonally/
 * A: https://leetcode.com/problems/sort-the-matrix-diagonally/discuss/490185/Javascript-and-C%2B%2B-solutions
 */

 /*
let diagonalSort = (A, m = {}) => {
    let M = A.length,
        N = A[0].length;
    let key = (i, j) => {
        let offset = Math.min(i, j);
        let u = i - offset,
            v = j - offset;
        return `${u},${v}`;
    };
    for (let i = 0; i < M; ++i) {
        for (let j = 0; j < N; ++j) {
            if (!m[key(i, j)])
                m[key(i, j)] = [];
            m[key(i, j)].push(A[i][j]);
        }
    }
    for (let i = 0; i < M; ++i) m[key(i, 0)].sort((a, b) => a - b);
    for (let j = 1; j < N; ++j) m[key(0, j)].sort((a, b) => a - b);
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            A[i][j] = m[key(i, j)][0], m[key(i, j)].shift();
    return A;
};
*/

let diagonalSort = (A, m = {}) => {
    let M = A.length,
        N = A[0].length;
    for (let i = 0; i < M; ++i) {
        for (let j = 0; j < N; ++j) {
            if (!m[i - j])
                m[i - j] = [];
            m[i - j].push(A[i][j]);
        }
    }
    for (let i = 0; i < M; ++i) m[i].sort((a, b) => a - b);
    for (let j = 1; j < N; ++j) m[-j].sort((a, b) => a - b);
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            A[i][j] = m[i - j][0], m[i - j].shift();
    return A;
};
