/*
 * 238. Product of Array Except Self
 *
 * Q: https://leetcode.com/problems/product-of-array-except-self/
 * A: https://leetcode.com/problems/product-of-array-except-self/discuss/507330/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

let productExceptSelf = A => {
    let N = A.length;
    let L = Array(N + 1).fill(1),
        R = Array(N + 1).fill(1);
    for (let i = 1; i <= N; ++i)
        L[i] = L[i - 1] * A[i - 1];
    for (let i = N - 1; i >= 0; --i)
        R[i] = R[i + 1] * A[i];
    let ans = Array(N);
    for (let i = 0; i < N; ++i)
        ans[i] = L[i] * R[i + 1];
    return ans;
};