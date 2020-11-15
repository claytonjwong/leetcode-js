/*
 * 1582. Special Positions in a Binary Matrix
 *
 * Q: https://leetcode.com/problems/special-positions-in-a-binary-matrix
 * A: https://leetcode.com/problems/special-positions-in-a-binary-matrix/discuss/843916/Kt-Js-Py3-Cpp-Sum-Row-and-Column
 */

let numSpecial = (A, cnt = 0) => {
    let M = A.length,
        N = A[0].length;
    let row = Array(M).fill(0),
        col = Array(N).fill(0);
    for (let i = 0; i < M; ++i)
	    for (let j = 0; j < N; ++j)
            if (A[i][j])
                ++row[i],
                ++col[j];
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (A[i][j] && row[i] == 1 && col[j] == 1)
                ++cnt;
    return cnt;
};
