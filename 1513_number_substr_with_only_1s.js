/*
 * 1513. Number of Substrings With Only 1s
 *
 * Q: https://leetcode.com/problems/number-of-substrings-with-only-1s/
 * A: https://leetcode.com/problems/number-of-substrings-with-only-1s/discuss/731600/Javascript-and-C%2B%2B-solutions
 */

 // 1-liner
let numSub = (s, sum = n => Math.floor((n * (n + 1)) / 2)) => s.split('0').map(run => sum(run.length)).reduce((a, b) => (a + b) % (1e9 + 7));

// 2-liner
let sum = n => Math.floor((n * (n + 1)) / 2);
let numSub = s => s.split('0').map(run => sum(run.length)).reduce((a, b) => (a + b) % (1e9 + 7));
