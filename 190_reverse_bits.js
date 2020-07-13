/*
 * 190. Reverse Bits
 *
 * Q: https://leetcode.com/problems/reverse-bits/
 * A: https://leetcode.com/problems/reverse-bits/discuss/734271/Javascript-and-C%2B%2B-solutions
 */

let reverseBits = x => parseInt(_.padEnd(x.toString(2).split('').reverse().join(''), 32, '0'), 2);
