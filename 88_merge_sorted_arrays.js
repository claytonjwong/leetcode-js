/*
 * 88. Merge Sorted Array
 *
 * Q: https://leetcode.com/problems/merge-sorted-array/
 * A: https://leetcode.com/problems/merge-sorted-array/discuss/670661/Kt-Js-Py3-Cpp-Merge-from-Right-to-Left
 */

let merge = (A, M, B, N) => {
    let i = M - 1,
        j = N - 1,
        k = M + N - 1;
    while (0 <= j)
        A[k--] = i < 0 || A[i] < B[j] ? B[j--] : A[i--];
};
