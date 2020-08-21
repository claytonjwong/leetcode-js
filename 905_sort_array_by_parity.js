/*
 * 905. Sort Array By Parity
 *
 * Q: https://leetcode.com/problems/sort-array-by-parity/
 * A: https://leetcode.com/problems/sort-array-by-parity/discuss/172134/Javascript-Python3-C%2B%2B-1-Liners
 */

let sortArrayByParity = A => A.filter(x => !(x & 1)).concat(A.filter(x => x & 1));
