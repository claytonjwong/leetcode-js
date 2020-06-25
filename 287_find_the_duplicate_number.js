/*
 * 287. Find the Duplicate Number
 *
 * Q: https://leetcode.com/problems/find-the-duplicate-number/
 * A: https://leetcode.com/problems/find-the-duplicate-number/discuss/705081/Javascript-and-C%2B%2B-solutions
 */

let findDuplicate = A => A.sort((a, b) => a - b).filter((_, i) => 0 < i && A[i - 1] == A[i])[0];