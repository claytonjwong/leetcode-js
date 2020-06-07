/*
 * 1471. The k Strongest Values in an Array
 *
 * Q: https://leetcode.com/problems/the-k-strongest-values-in-an-array/
 * A: https://leetcode.com/problems/the-k-strongest-values-in-an-array/discuss/674391/Javascript-and-C%2B%2B-solutions
 */
let getStrongest = (A, K, abs = Math.abs) => {
    A.sort((a, b) => a - b);
    let m = A[Math.floor((A.length - 1) / 2)];
    return A.sort((a, b) => abs(b - m) == abs(a - m) ? b - a : abs(b - m) - abs(a - m)).slice(0, K);
};