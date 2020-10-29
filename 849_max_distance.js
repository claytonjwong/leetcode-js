/*
 * 849. Maximize Distance to Closest Person
 *
 * Q: https://leetcode.com/problems/maximize-distance-to-closest-person/
 * A: https://leetcode.com/problems/maximize-distance-to-closest-person/discuss/137957/Kt-Js-Py3-Cpp-Distance-from-LeftRight
 */

let maxDistToClosest = A => {
    let best = 0;
    let N = A.length;
    let L = Array(N).fill(N),
        R = Array(N).fill(N);
    if (A[0])
        L[0] = 0;
    if (A[N - 1])
        R[N - 1] = 0;
    for (let i = 1; i < N; ++i)
        L[i] = A[i] ? 0 : 1 + L[i - 1];  // distance from (L)eft-to-right 👉
    for (let i = N - 2; 0 <= i; --i)
        R[i] = A[i] ? 0 : 1 + R[i + 1];  // distance from (R)ight-to-left 👈
    for (let i = 0; i < N; ++i)
        best = Math.max(best, Math.min(L[i], R[i]));
    return best;
};
