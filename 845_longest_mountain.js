/*
 * 845. Longest Mountain in Array
 *
 * Q: https://leetcode.com/problems/longest-mountain-in-array/
 * A: https://leetcode.com/problems/longest-mountain-in-array/discuss/135623/Kt-Js-Py3-Cpp-Mountain-Peak
 */

let longestMountain = (A, best = 0) => {
    let N = A.length;
    for (let k = 1; k + 1 < N; ++k) {
        let i = k,
            j = k;
        while (0 <= i - 1 && A[i - 1] < A[i]) --i;
        while (j + 1 < N  && A[j] > A[j + 1]) ++j;
        if (i < k && k < j)
            best = Math.max(best, j - i + 1);  // +1 for i..j inclusive
    }
    return best;
};
