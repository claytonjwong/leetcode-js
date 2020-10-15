/*
 * 189. Rotate Array
 *
 * Q: https://leetcode.com/problems/rotate-array/
 * A: https://leetcode.com/problems/rotate-array/discuss/895736/Kt-Js-Py3-Cpp-K-Rotations
 */

let rotate = (A, K) => {
    while (K--) A.unshift(A.pop());
};
