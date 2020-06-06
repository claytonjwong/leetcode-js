/*
 * 231. Power of Two
 *
 * Q: https://leetcode.com/problems/power-of-two/
 * A: https://leetcode.com/problems/power-of-two/discuss/672555/Javascript-and-C%2B%2B-solutions
 */
let isPowerOfTwo = x => x <= 0 ? false : !(x & (x - 1));