/*
 * 973. K Closest Points to Origin
 *
 * Q: https://leetcode.com/problems/k-closest-points-to-origin/
 * A: https://leetcode.com/problems/k-closest-points-to-origin/discuss/660332/Javascript-and-C%2B%2B-solutions
 */

let kClosest = (A, K) => A.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1])).slice(0, K);