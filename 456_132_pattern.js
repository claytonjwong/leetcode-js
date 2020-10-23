/*
 * 456. 132 Pattern
 *
 * Q: https://leetcode.com/problems/132-pattern/
 * A: https://leetcode.com/problems/132-pattern/discuss/907505/Kt-Js-Py3-Cpp-Trivial-solutions
 */

let find132pattern = A => {
    let N = A.length,
        first = A[0];
    for (let j = 1; j < N; ++j) {
        first = Math.min(first, A[j]);  // ⭐️ minimum A[i] seen so far
        for (let k = j + 1; k < N; ++k)
            if (first < A[k] && A[k] < A[j])
                return true;
    }
    return false;
};
