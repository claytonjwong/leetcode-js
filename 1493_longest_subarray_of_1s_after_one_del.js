/*
 * 1493. Longest Subarray of 1's After Deleting One Element
 *
 * Q: https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 * A: https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/discuss/708212/Javascript-and-C%2B%2B-solutions
 */

let longestSubarray = (A, max = 0) => {
    let N = A.length;
    let L = Array(N).fill(0),
        R = Array(N).fill(0);
    let beg = 0,
        end = N - 1;
    for (let i = beg; i <  N; ++i) L[i] = A[i] ? (beg < i ? L[i - 1] + A[i] : A[i]) : 0; // prefix sums from Left-to-right 👉
    for (let i = end; 0 <= i; --i) R[i] = A[i] ? (i < end ? R[i + 1] + A[i] : A[i]) : 0; // prefix sums from Right-to-left 👈
    for (let i = 0; i + 2 < N; ++i)
        max = Math.max(max, L[i] + R[i + 2]); // maximum with a single gap 🎯
    return max;
};
