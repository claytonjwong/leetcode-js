/*
 * 859. Buddy Strings
 *
 * Q: https://leetcode.com/problems/buddy-strings/
 * A: https://leetcode.com/problems/buddy-strings/discuss/141769/Kt-Js-Py3-C%2B%2B-solutions
 */

let buddyStrings = (A, B) => {
    let M = A.length,
        N = B.length;
    if (M != N)
        return false;
    if (A == B)
        return new Set(A.split('')).size < N;
    let j = -1,
        k = -1;
    for (let i = 0; i < N; ++i)
        if (A[i] != B[i])
            j = k, k = i;
    if (j == -1 || k == -1)
        return false;
    A = A.split('');
    [A[j], A[k]] = [A[k], A[j]];
    return A.join('') == B;
};
