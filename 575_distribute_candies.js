/*
 * 575. Distribute Candies
 *
 * Q: https://leetcode.com/problems/distribute-candies/
 * A: https://leetcode.com/problems/distribute-candies/discuss/668969/Javascript-and-C%2B%2B-solutions
 */

let distributeCandies = A => Math.min(new Set(A).size, A.length / 2);