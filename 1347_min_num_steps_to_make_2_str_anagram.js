/*
 * 1347. Minimum Number of Steps to Make Two Strings Anagram
 *
 * Q: https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
 * A: https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/discuss/509106/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// let minSteps = (s, t, m = {}, ans = 0) => {
//     for (let c of s) {
//         if (!m[c])
//             m[c] = 0;
//         ++m[c];
//     }
//     for (let c of t)
//         if (!m[c] || m[c]-- <= 0)
//             ++ans;
//     return ans;
// };

let minSteps = (s, t, A = Array(123).fill(0)) => {
    for (let i = 0; i < s.length; ++i)
        ++A[s[i].charCodeAt(0)],
        --A[t[i].charCodeAt(0)];
    return A.reduce((a, b) => a + Math.abs(b));
};