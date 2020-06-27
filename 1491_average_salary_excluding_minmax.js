/*
 * 1491. Average Salary Excluding the Minimum and Maximum Salary
 *
 * Q: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 * A: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/discuss/708064/Javascript-and-C%2B%2B-solutions
 */

let average = A => A.sort((a, b) => a - b).slice(1, A.length - 1).reduce((a, b) => a + b) / (A.length - 2);
