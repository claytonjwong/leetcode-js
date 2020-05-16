/*
 * 918. Maximum Sum Circular Subarray
 *
 * Q: https://leetcode.com/problems/maximum-sum-circular-subarray/
 * A: https://leetcode.com/problems/maximum-sum-circular-subarray/discuss/633598/Javascript-and-C%2B%2B-solutions
 */

let maxSubarraySumCircular = A => {
    let kadane = f => {
        let sum = A[0],
            ans = A[0];
        for (let i = 1; i < A.length; ++i)
            sum = f(sum + A[i], A[i]),
            ans = f(ans, sum);
        return ans;
    };
    let min = kadane(Math.min),
        max = kadane(Math.max),
        sum = A.reduce((a, b) => a + b);
    return Math.max(max, sum - min ? sum - min : -Infinity); // max of "no wrap" xor "wrap" 🎯
};