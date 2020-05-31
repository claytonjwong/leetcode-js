/*
 * 1464. Maximum Product of Two Elements in an Array
 *
 * Q: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 * A: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/discuss/661624/Javascript-and-C%2B%2B-solutions
 */
let maxProduct = A => A.sort((a, b) => a - b).slice(A.length - 2).reduce((a, b) => (a - 1) * (b - 1));