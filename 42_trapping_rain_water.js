/*
 * 42. Trapping Rain Water
 *
 * Q: https://leetcode.com/problems/trapping-rain-water/
 * A: https://leetcode.com/problems/trapping-rain-water/discuss/512006/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[]} height
 * @return {number}
 */

// TLE: brute-force -> O(N^3)
// let trap = (A, ans = 0) => {
//     let N = A.length;
//     for (let i = 0; i + 2 < N; ++i) {
//         for (let j = i + 2; j < N; ++j) {
//             let low = Math.min(A[i], A[j]);
//             for (let k = i + 1; k < j; ++k) {
//                 ans += Math.max(low - A[k], 0);
//                 A[k] = Math.max(A[k], low);
//             }
//         }
//     }
//     return ans;
// };

// AC: brute-force -> O(N^2)
// let trap = (A, ans = 0) => {
//     let N = A.length;
//     for (let i = 1; i + 1 < N; ++i) {
//         let L = 0; for (let j = i - 1; j >= 0; --j) L = Math.max(L, A[j]);
//         let R = 0; for (let j = i + 1; j <  N; ++j) R = Math.max(R, A[j]);
//         ans += Math.max(Math.min(L, R) - A[i], 0);
//     }
//     return ans;
// };

// AC: prefix maximum L/R -> O(N)
let trap = (A, ans = 0) => {
    let N = A.length;
    if (N < 3)
        return 0;
    let beg = 0, end = N - 1;
    let L = Array(N).fill(A[beg]); for (let i = beg + 1; i <  N; ++i) L[i] = Math.max(A[i], L[i - 1]);
    let R = Array(N).fill(A[end]); for (let i = end - 1; i > -1; --i) R[i] = Math.max(A[i], R[i + 1]);
    for (let i = 1; i + 1 < N; ++i)
        ans += Math.max(Math.min(L[i], R[i]) - A[i], 0);
    return ans;
};