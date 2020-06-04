/*
 * Microsoft- Online Assessment
 * Completed June 3, 2020 6:29 PM
 * 99%
 * Your interview score of 9.94/10 beats 99% of all users.
 * Time Spent: 4 minutes 11 seconds
 * Time Allotted: 1 hour
 */

/*
 * 509. Fibonacci Number
 *
 * Q: https://leetcode.com/problems/fibonacci-number/
 * A: https://leetcode.com/problems/fibonacci-number/discuss/595781/Javascript-and-C%2B%2B-solutions
 */
let fib = N => N < 2 ? N : fib(N - 1) + fib(N - 2);

/*
 * 575. Distribute Candies
 *
 * Q: https://leetcode.com/problems/distribute-candies/
 * A: https://leetcode.com/problems/distribute-candies/discuss/668969/Javascript-and-C%2B%2B-solutions
 */
let distributeCandies = A => Math.min(new Set(A).size, A.length / 2);