/*
 * 1558. Minimum Numbers of Function Calls to Make Target Array
 *
 * Q: https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/
 * A: https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/discuss/813579/Javascript-Python3-C%2B%2B-Operation-0-%2B-1
 */

let bits = x => x.toString(2).split('').filter(c => c == '1').length;
let minOperations = A => _.sum(A.map(x => bits(x))) + Math.floor(Math.log2(Math.max(...A)));
