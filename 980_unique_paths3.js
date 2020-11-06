/*
 * 980. Unique Paths III
 *
 * Q: https://leetcode.com/problems/unique-paths-iii/
 * A: https://leetcode.com/problems/unique-paths-iii/discuss/856143/Kt-Js-Py3-Cpp-DFS-%2B-BT
 */

let uniquePathsIII = (A, total = 0, paths = 0) => {
    let M = A.length,
        N = A[0].length;
    for (let i = 0; i < M; ++i) {
        for (let j = 0; j < N; ++j) {
            if (A[i][j] == 0) ++total;
            if (A[i][j] == 1) s = [i, j];
            if (A[i][j] == 2) t = [i, j];
        }
    }
    let go = (i, j, steps = -1) => {
        if (t[0] == i && t[1] == j)
            return steps == total ? ++paths : 0;
        for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]])
            if (0 <= u && u < M && 0 <= v && v < N && (!A[u][v] || A[u][v] == 2))
                A[u][v] = -1,
                go(u, v, steps + 1),
                A[u][v] = 0;
        return paths;
    };
    return go(...s);
};
