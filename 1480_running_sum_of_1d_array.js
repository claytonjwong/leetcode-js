/*
 * 1480. Running Sum of 1d Array
 *
 * Q: https://leetcode.com/problems/running-sum-of-1d-array/
 * A: https://leetcode.com/problems/running-sum-of-1d-array/discuss/686233/Javascript-and-C%2B%2B-solutions
 */
let runningSum = (A, sum = 0) => A.map(x => sum += x);