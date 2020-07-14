/*
 * 238. Product of Array Except Self
 *
 * Q: https://leetcode.com/problems/product-of-array-except-self/
 * A: https://leetcode.com/problems/product-of-array-except-self/discuss/580963/Javascript-and-C%2B%2B-solutions
 */

let productExceptSelf = A => {
    let N = A.length;
    let L = [...A],
        R = [...A];
    let beg = 0,
        end = N - 1;
    for (let i = beg + 1; i <  N; ++i) L[i] = L[i - 1] * A[i]; // ⭐️ prefix products from 👉 (L)eft-to-right
    for (let i = end - 1; 0 <= i; --i) R[i] = R[i + 1] * A[i]; // ⭐️ prefix products from 👈 (R)ight-to-left
    return A.map((_, i) => {
        let prod = 1;
        if (beg < i) prod *= L[i - 1];
        if (i < end) prod *= R[i + 1];
        return prod;
    })
};
