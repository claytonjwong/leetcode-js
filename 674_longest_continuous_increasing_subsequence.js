/*
 * 674. Longest Continuous Increasing Subsequence
 *
 * Q: https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 * A: https://leetcode.com/problems/longest-continuous-increasing-subsequence/discuss/635727/Javascript-and-C%2B%2B-solutions
 */

let findLengthOfLCIS = A => {
    let max = Number(A.length > 0);
    for (let i = 1, run = 1; i < A.length; ++i)
        max = Math.max(max, run = A[i - 1] < A[i] ? run + 1 : 1);
    return max;
};