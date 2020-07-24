/*
 * 724. Find Pivot Index
 *
 * Q: https://leetcode.com/problems/find-pivot-index/
 * A: https://leetcode.com/problems/find-pivot-index/discuss/751936/Javascript-Python3-C%2B%2B-Prefix-Sums
 */

let pivotIndex = A => {
    let N = A.length;
    let L = Array(N).fill(0),
        R = Array(N).fill(0);
    let beg = 1,
        end = N - 2;
    for (let i = beg; i <  N; ++i) L[i] = A[i - 1] + L[i - 1]; // non-inclusive prefix sums from Left-to-right 👉
    for (let j = end; 0 <= j; --j) R[j] = A[j + 1] + R[j + 1]; // non-inclusive suffix sums from Right-to-left 👈
    for (let k = 0; k < N; ++k)
        if (L[k] == R[k])
            return k; // 🎯 target at k-th index
    return -1;
};
