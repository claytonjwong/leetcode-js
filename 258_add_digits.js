/*
 * 258. Add Digits
 *
 * Q: https://leetcode.com/problems/add-digits/
 * A: https://leetcode.com/problems/add-digits/discuss/756944/Javascript-Python3-C%2B%2B-1-Liners
 */

// using reduce() to accumulate the digits of x
let addDigits = x => x < 10 ? x : addDigits(x.toString().split('').map(Number).reduce((a, b) => a + b));

// using sum() to accumulate the digits of x
let addDigits = x => x < 10 ? x : addDigits(_.sum(x.toString().split('').map(Number)));
