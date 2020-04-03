/*
 * 53. Maximum Subarray
 *
 * Q: https://leetcode.com/problems/maximum-subarray/
 * A: https://leetcode.com/problems/maximum-subarray/discuss/561900/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = A => {
    let sum = A[0],
        max = A[0];
    for (let i = 1; i < A.length; ++i) {
        sum = Math.max(sum + A[i], A[i]);
        max = Math.max(max, sum);
    }
    return max;
};