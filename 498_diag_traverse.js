/*
 * 498. Diagonal Traverse
 *
 * Q: https://leetcode.com/problems/diagonal-traverse/
 * A: https://leetcode.com/problems/diagonal-traverse/discuss/986121/Kt-Js-Py3-Cpp-Traverse-(Up-%2B-Right)
 */

let findDiagonalOrder = (A, rev = 0, diags = []) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let diag = (i, j, res = []) => {      // traverse diag 👆 👉  (up + right)
        while (0 <= i && j < N)
            res.push(A[i--][j++]);
        if (rev)
            res.reverse();
        rev ^= 1;
        return res;
    };
    for (let i = 0; i < M; ++i)           // first column
        diags.push(...diag(i, 0));
    for (let j = 1; j < N; ++j)           // last row
        diags.push(...diag(M - 1, j));
    return diags;
};
