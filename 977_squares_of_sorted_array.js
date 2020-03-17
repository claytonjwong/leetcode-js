 /*
  * 977. Squares of a Sorted Array
  *
  * Q1: https://leetcode.com/problems/squares-of-a-sorted-array/
  * A1: https://leetcode.com/problems/squares-of-a-sorted-array/discuss/542713/Javascript-and-C%2B%2B-solutions
  */
 let sortedSquares = A => A.map(x => x * x).sort((a, b) => a - b);