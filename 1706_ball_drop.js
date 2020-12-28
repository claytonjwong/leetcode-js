/*
 * 1706. Where Will the Ball Fall
 *
 * Q: https://leetcode.com/problems/where-will-the-ball-fall/
 * A: https://leetcode.com/problems/where-will-the-ball-fall/discuss/988174/kt-js-py3-cpp-simulation-recursive-iterative
 */

// Recurisve Concise
let findBall = (A, M = A.length, N = A[0].length, drop = (i, j) => i == M ? j : 0 <= j && j < N && 0 <= j + A[i][j] && j + A[i][j] < N && A[i][j] == A[i][j + A[i][j]] ? drop(i + 1, j + A[i][j]) : -1) => [...Array(N).keys()].map(j => drop(0, j));

// Recursive Verbose
let findBall = A => {
    let M = A.length,
        N = A[0].length;
    let drop = (i, j) => {
        if (i == M)
            return j;
        if (0 <= j && j < N && 0 <= j + A[i][j] && j + A[i][j] < N && A[i][j] == A[i][j + A[i][j]])
            return drop(i + 1, j + A[i][j]);
        return -1;
    };
    return [...Array(N).keys()].map(j => drop(0, j));
};

// Iterative
let findBall = (A, ans = []) => {
    let M = A.length,
        N = A[0].length;
    for (let k = 0; k < N; ++k) {
        let i = 0,
            j = k;
        while (i < M && 0 <= j && j < N && 0 <= j + A[i][j] && j + A[i][j] < N && A[i][j] == A[i][j + A[i][j]])
            j += A[i][j], ++i;
        ans.push(i == M ? j : -1);
    }
    return ans;
};
