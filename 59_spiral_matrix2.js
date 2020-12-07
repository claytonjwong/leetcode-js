/*
 * 59. Spiral Matrix II
 *
 * Q: https://leetcode.com/problems/spiral-matrix-ii/
 * A: https://leetcode.com/problems/spiral-matrix-ii/discuss/430457/Kt-Js-Py3-Cpp-Step-and-Turn-Right
 */

let generateMatrix = N => {
    let A = [...Array(N)].map(_ => Array(N).fill(0));
    let i = 0,
        j = 0,
        k = 0;
    let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];  // clockwise 👆, 👉, 👇, 👈
    let turn = () => k = (k + 1) % 4;
    let step = () => {
        let u = i + dirs[k][0],
            v = j + dirs[k][1];
        if (0 <= u && u < N && 0 <= v && v < N && !A[u][v]) {
            i = u;
            j = v;
            return true;
        }
        return false;
    };
    let steps = 1;
    A[0][0] = steps++;
    while (steps <= N * N) {
        while (step())
           A[i][j] = steps++;
       turn();
    }
    return A;
};
