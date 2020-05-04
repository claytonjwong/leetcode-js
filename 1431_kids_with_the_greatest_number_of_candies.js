/*
 * 1431. Kids With the Greatest Number of Candies
 *
 * Q: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 * A: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/discuss/611820/Javascript-and-C%2B%2B-solutions
 */

let kidsWithCandies = (A, K) => {
    let max = Math.max(...A);
    return A.map(x => x + K >= max);
};