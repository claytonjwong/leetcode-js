/*
 * 88. Merge Sorted Array
 *
 * Q: https://leetcode.com/problems/merge-sorted-array/
 * A: https://leetcode.com/problems/merge-sorted-array/discuss/670661/Javascript-and-C%2B%2B-solutions
 */

let merge = (A, M, B, N) => {
    for (let i = M; i < M + N; ++i)
        A[i] = B[i - M];
    A.sort((a, b) => a - b);
};