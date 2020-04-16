/*
 * 268. Missing Number
 *
 * Q: https://leetcode.com/problems/missing-number/
 * A: https://leetcode.com/problems/missing-number/discuss/581574/Javascript-and-C%2B%2B-solutions
 */

 // let missingNumber = A => {
//     let N = A.length + 1;
//     let sum = A.reduce((a, b) => a + b);
//     return (N * (N - 1) / 2) - sum;
// };

let missingNumber = A => ((A.length + 1) * A.length / 2) - A.reduce((a, b) => a + b);
