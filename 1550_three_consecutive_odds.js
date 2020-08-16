/*
 * 1550. Three Consecutive Odds
 *
 * Q: https://leetcode.com/problems/three-consecutive-odds/
 * A: https://leetcode.com/problems/three-consecutive-odds/discuss/794079/Javascript-Python3-C%2B%2B-1-Liners-via-reduce()
 */

let threeConsecutiveOdds = A => A.reduce((found, _, i) => i < 2 ? found : found || ((A[i - 2] % 2) && (A[i - 1] % 2) && (A[i] % 2)), false);
