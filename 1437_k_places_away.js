/*
 * 1437. Check If All 1's Are at Least Length K Places Away
 *
 * Q: https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
 * A: https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/discuss/613577/Kt-Js-Py3-Cpp-Last-Seen-Index
 */

let kLengthApart = (A, K, last = -1e5) => A.every((_, i) => {
    if (!A[i])
        return true;
    let ok = K < i - last; last = i;
    return ok;
});
