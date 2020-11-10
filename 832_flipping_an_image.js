/*
 * 832. Flipping an Image
 *
 * Q: https://leetcode.com/problems/flipping-an-image/
 * A: https://leetcode.com/problems/flipping-an-image/discuss/131721/Kt-Js-Py3-Cpp-1-Liners
 */

let flipAndInvertImage = A => A.map(row => row.reverse().map(x => x ^ 1));
