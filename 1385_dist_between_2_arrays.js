/*
 * 1385. Find the Distance Value Between Two Arrays
 *
 * Q: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
 * A: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/discuss/552420/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */

let findTheDistanceValue = (A, B, T) => A.filter(a => B.every(b => Math.abs(a - b) > T)).length;