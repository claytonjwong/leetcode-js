/*
 * 300. Longest Increasing Subsequence
 *
 * Q: https://leetcode.com/problems/longest-increasing-subsequence/
 * A: https://leetcode.com/problems/longest-increasing-subsequence/discuss/385203/C%2B%2B-and-Javascript-solutions
 */

/**
 * @param {number[]} A
 * @return {number}
 */

let lengthOfLIS = (A, max = 1) => {
    let N = A.length;
    if (N == 0)
        return 0;
    let dp = Array(N).fill(1);
    for (let j = 1; j < N; ++j)
        for (let i = 0; i < j; ++i)
            if (A[i] < A[j])
                max = Math.max(max, dp[j] = Math.max(dp[j], 1 + dp[i]));
    return max;
};

var A = [1,2,3];
const ans = lengthOfLIS(A);
console.log(ans);
