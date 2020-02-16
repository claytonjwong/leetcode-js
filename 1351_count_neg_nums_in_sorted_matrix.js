/*
 * 1351. Count Negative Numbers in a Sorted Matrix
 *
 * Q: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * A: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/discuss/510845/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

let countNegatives = A => A.map(row => row.filter(x => x < 0).length).reduce((a, b) => a + b);