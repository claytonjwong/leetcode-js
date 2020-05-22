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
let trap = (A, sum = 0) => {
    let N = A.length;
    let L = Array(N).fill(0),
        R = Array(N).fill(0);
    let beg = 0,
        end = N - 1;
    for (let i = beg; i < N;  ++i) L[i] = i == beg ? A[i] : Math.max(A[i], L[i - 1]); // (L)eft-to-right 👉
    for (let j = end; 0 <= j; --j) R[j] = j == end ? A[j] : Math.max(A[j], R[j + 1]); // (R)ight-to-left 👈
    for (let i = 1; i + 1 < N; ++i)
        sum += Math.min(L[i], R[i]) - A[i]; // accumulate water sum per column i 🎯
    return sum;
};