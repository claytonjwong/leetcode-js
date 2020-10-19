/*
 * 1007. Minimum Domino Rotations For Equal Row
 *
 * Q: https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/
 * A: https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/discuss/252219/Kt-Js-Py3-Cpp-Brute-Force
 */

let minDominoRotations = (A, B) => {
    let N = A.length;
    let rotate = (cur, alt, T, cnt = 0) => {
        for (let i = 0; i < N; ++i) {
            if (cur[i] == T)
                continue;
            if (alt[i] == T)
                ++cnt;
            else
                return Infinity;
        }
        return cnt;
    };
    let cand = [ rotate(A, B, A[0]), rotate(A, B, B[0]),
                 rotate(B, A, A[0]), rotate(B, A, B[0]) ];
    return cand.every(cnt => cnt == Infinity) ? -1 : Math.min(...cand);
};
