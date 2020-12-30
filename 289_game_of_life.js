/*
 * 289. Game of Life
 *
 * Q: https://leetcode.com/problems/game-of-life/
 * A: https://leetcode.com/problems/game-of-life/discuss/607337/Kt-Js-Py3-Cpp-In-Place-LIVE-or-DIE
 */

let gameOfLife = A => {
    let M = A.length,
        N = A[0].length;
    for (let i = 0; i < M; ++i) {
        for (let j = 0; j < N; ++j) {
            let k = 0;
            for (let [u, v] of [[i - 1, j], [i - 1, j + 1], [i, j + 1], [i + 1, j + 1], [i + 1, j], [i + 1, j - 1], [i, j - 1], [i - 1, j - 1]])
                if (0 <= u && u < M && 0 <= v && v < N && 0 < A[u][v])
                    ++k;
            if (0 < A[i][j])
                A[i][j] = k == 2 || k == 3 ? k : 1;              // 🙂 live cells must have 2 or 3 adjacent live cells to stay alive, otherwise k = 1 (special case)
            else
                A[i][j] = -k;                                    // 👻 dead cells have -k adjacent live cells
        }
    }
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (0 < A[i][j])
                A[i][j] = Number(A[i][j] == 2 || A[i][j] == 3);  // 🙂 live cells must have 2 or 3 adjacent live cells to stay alive
            else
                A[i][j] = Number(A[i][j] == -3);                 // 👻 dead cells become alive with 3 adjacent live cells
};
