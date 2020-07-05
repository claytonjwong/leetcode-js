/*
 * 461. Hamming Distance
 *
 * Q: https://leetcode.com/problems/hamming-distance/
 * A: https://leetcode.com/problems/hamming-distance/discuss/721144/Javascript-and-C%2B%2B-solutions
 */

let hammingDistance = (a, b) => (a ^ b).toString(2).split('').map(Number).reduce((a, b) => a + b);
