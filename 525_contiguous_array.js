/*
 * 525. Contiguous Array
 *
 * Q: https://leetcode.com/problems/contiguous-array/
 * A: https://leetcode.com/problems/contiguous-array/discuss/577638/Javascript-and-C%2B%2B-solutions
 */

let findMaxLength = (A, seen = new Map(), max = 0) => {
    let N = A.length;
    let dp = Array(N + 1).fill(0);
    for (let i = 1; i <= N; ++i)
        dp[i] = dp[i - 1] + (A[i - 1] == 0 ? -1 : 1);
    dp.forEach((x, i) => {
        if (seen.has(x))
            max = Math.max(max, i - seen.get(x));
        else
            seen.set(x, i);
    });
    return max;
};