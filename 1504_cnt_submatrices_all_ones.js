/*
 * 1504. Count Submatrices With All Ones
 *
 * Q: https://leetcode.com/problems/count-submatrices-with-all-ones/
 * A: https://leetcode.com/problems/count-submatrices-with-all-ones/discuss/762330/Kt-Js-Py3-Cpp-Brute-Force
 */

let numSubmat = (A, total = 0) => {
    let go = (row, col, cnt = 0) => {
        let M = A.length,
            N = A[0].length;
        for (let i = row; i < M; ++i)
            for (let j = col; j < N; ++j)
                if (A[i][j])
                    ++cnt;
                else
                    N = j;
        return cnt;
    };
    let M = A.length,
        N = A[0].length;
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            total += go(i, j); // 🎯 count of all submatrices starting with i,j as top-left corner
    return total;
};
