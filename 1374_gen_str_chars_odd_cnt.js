/*
 * 1374. Generate a String With Characters That Have Odd Counts
 *
 * Q: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
 * A: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/discuss/534703/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number} n
 * @return {string}
 */

// let generateTheString = N => {
//     let ans = Array(N - 1).fill('a');
//     ans.push(N % 2 ? 'a' : 'b');
//     return ans.join('');
// };

// let generateTheString = N => Array(N - 1).fill('a').join('') + (N % 2 ? 'a' : 'b');

let generateTheString = N => 'a'.repeat(N - 1) + (N % 2 ? 'a' : 'b');