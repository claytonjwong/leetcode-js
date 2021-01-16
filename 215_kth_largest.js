/*
 * 215. Kth Largest Element in an Array
 *
 * Q: https://leetcode.com/problems/kth-largest-element-in-an-array/
 * A: https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/153981/Kt-Js-Py3-Cpp-Sort
 */

let findKthLargest = (A, K) => {
    let N = A.length;
    A.sort((a, b) => a - b);
    return A[N - K];
};
