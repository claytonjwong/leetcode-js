/*
 * 392. Is Subsequence
 *
 * Q: https://leetcode.com/problems/is-subsequence/
 * A: https://leetcode.com/problems/is-subsequence/discuss/473784/Javascript-and-C%2B%2B-solutions
 */

let isSubsequence = (s, t, i = 0) => {
    for (let j = 0; i < s.length && j < t.length; ++j)
        if (s[i] == t[j])
            ++i;
    return i == s.length;
};