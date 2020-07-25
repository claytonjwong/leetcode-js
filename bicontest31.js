/*
 * https://leetcode.com/contest/biweekly-contest-31/ranking/106/
 *
 * Rank          Name           Score   Finish Time    Q1 (3)     Q2 (4)       Q3 (5)    Q4 (7)
 * 2636 / 8677   claytonjwong   12      1:16:49        0:05:09    1:11:49 *1   0:41:05
 *
 * Screenshare: https://www.youtube.com/watch?v=zdqg0ERZk_I&feature=youtu.be
 */

/*
 * 1523. Count Odd Numbers in an Interval Range
 *
 * Q: https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
 * A: https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/discuss/754764/Javscript-Python3-C%2B%2B-1-Liners
 */
let countOdds = (i, j) => Math.floor(Math.abs(j - i - 1) / 2) + (i % 2) + (j % 2) + (!(i % 2) && !(j % 2)) - (i == j);

/*
 * 1524. Number of Sub-arrays With Odd Sum
 *
 * Q: https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/
 * A: https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/discuss/754751/Javascript-Python3-C%2B%2B-count-of-evenodd-sums
 */
let numOfSubarrays = (A, sum = 0, cnt = [1, 0]) => {
    for (let i = 0; i < A.length; ++i)
        ++cnt[(sum += A[i]) % 2]
    return (cnt[0] * cnt[1]) % (1e9 + 7);
};

/*
 * 1525. Number of Good Ways to Split a String
 *
 * Q: https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
 * A: https://leetcode.com/problems/number-of-good-ways-to-split-a-string/discuss/754776/Javascript-Python3-C%2B%2B-count-uniques-from-leftright
 */
let numSplits = (s, cnt = 0) => {
    let N = s.length,
        beg = 0,
        end = N - 1;
    let L = Array(N).fill(0),
        R = Array(N).fill(0);
    let unique = { L: new Set(), R: new Set() };
    for (let i = beg; i <  N; ++i) unique.L.add(s[i]), L[i] = unique.L.size; // unique counts from Left-to-right 👉
    for (let j = end; 0 <= j; --j) unique.R.add(s[j]), R[j] = unique.R.size; // unique counts from Right-to-left 👈
    for (let i = 1; i < N; ++i)
        if (L[i - 1] == R[i])
            ++cnt;
    return cnt;
};
