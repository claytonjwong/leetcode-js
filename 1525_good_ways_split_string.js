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
