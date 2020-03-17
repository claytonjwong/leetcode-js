/*
 * Facebook- Online Assessment
 * Completed March 17, 2020 12:34 PM
 * Your interview score of 8.36/10 beats 91% of all users.
 * Time Spent: 7 minutes 17 seconds
 * Time Allotted: 1 hour
 */

 /*
  * 977. Squares of a Sorted Array
  *
  * Q1: https://leetcode.com/problems/squares-of-a-sorted-array/
  * A1: https://leetcode.com/problems/squares-of-a-sorted-array/discuss/542713/Javascript-and-C%2B%2B-solutions
  */
let sortedSquares = A => A.map(x => x * x).sort((a, b) => a - b);

 /*
  * 791. Custom Sort String
  *
  * Q2: https://leetcode.com/problems/custom-sort-string/
  * A2: https://leetcode.com/problems/custom-sort-string/discuss/542718/Javascript-and-C%2B%2B-solutions
  */
 let customSortString = (S, T, m = {}) => {
    S.split('').forEach((x, i) => m[x] = i + 1);
    return T.split('').sort((a, b) => (m[a] || Infinity) - (m[b] || Infinity)).join('');
};