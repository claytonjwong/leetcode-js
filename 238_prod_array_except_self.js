/*
 * 238. Product of Array Except Self
 *
 * Q: https://leetcode.com/problems/product-of-array-except-self/
 * A: https://leetcode.com/problems/product-of-array-except-self/discuss/580963/Javascript-and-C%2B%2B-solutions
 */

let productExceptSelf = A => {
    let N = A.length;
    let L = Array(N),
        R = Array(N);
    let beg = 0,
        end = N - 1;
    L[beg] = A[beg]; for (let i = beg + 1; i < N;  ++i) L[i] = L[i - 1] * A[i]; // (L)eft-to-right 👉
    R[end] = A[end]; for (let i = end - 1; i >= 0; --i) R[i] = R[i + 1] * A[i]; // (R)ight-to-left 👈
    return A.map((_, i) => {
        let prod = 1;
        if (i > beg) prod *= L[i - 1];
        if (i < end) prod *= R[i + 1];
        return prod;
    })
};