/*
 * https://leetcode.com/contest/biweekly-contest-29/ranking/63/
 *
 * Rank          Name           Score   Finish Time    Q1 (3)     Q2 (4)       Q3 (5)   Q4 (6)
 * 1567 / 7932   claytonjwong   12      0:21:44        0:01:27    0:05:57 *1   0:16:44
 */

/*
 * 1491. Average Salary Excluding the Minimum and Maximum Salary
 *
 * Q: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 * A: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/discuss/708064/Javascript-and-C%2B%2B-solutions
 */
let average = A => A.sort((a, b) => a - b).slice(1, A.length - 1).reduce((a, b) => a + b) / (A.length - 2);

/*
 * 1492. The kth Factor of n
 *
 * Q: https://leetcode.com/problems/the-kth-factor-of-n/
 * A: https://leetcode.com/problems/the-kth-factor-of-n/discuss/708074/Javascript-and-C%2B%2B-solutions
 */
let kthFactor = (N, K) => {
    for (let i = 1; i <= N / 2; ++i)
        if (!(N % i) && !--K)
            return i;
    return -1;
};

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
