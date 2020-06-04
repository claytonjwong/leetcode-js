/*
 * 832. Flipping an Image
 *
 * Q: https://leetcode.com/problems/flipping-an-image/
 * A: https://leetcode.com/problems/flipping-an-image/discuss/131721/4-liner-C%2B%2B-reverse()-and-transform()
 */

let flipAndInvertImage = A => A.map(row => row.reverse().map(x => x ^ 1));