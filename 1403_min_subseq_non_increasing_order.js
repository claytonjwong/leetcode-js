/*
 * 1403. Minimum Subsequence in Non-Increasing Order
 *
 * Q: https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
 * A: https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/discuss/574389/Javascript-and-C%2B%2B-solutions
 */

let minSubsequence = (A, ans = []) => {
    A.sort((a, b) => b - a);
    let total = A.reduce((a, b) => a + b),
	    half = Math.floor(total / 2);
    for (let i = 0, sum = 0; i < A.length && sum <= half; ++i)
        sum += A[i], ans.push(A[i]);
    return ans;
};
