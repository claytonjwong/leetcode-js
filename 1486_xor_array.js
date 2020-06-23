/*
 * 1486. XOR Operation in an Array
 *
 * Q: https://leetcode.com/contest/weekly-contest-194/problems/xor-operation-in-an-array/
 * A: https://leetcode.com/problems/xor-operation-in-an-array/discuss/700800/Javascript-and-C%2B%2B-solutions
 */

let xorOperation = (N, start) => [...Array(N)].map((_, i) => start + 2 * i).reduce((a, b) => a ^ b , 0);