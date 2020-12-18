/*
 * 334. Increasing Triplet Subsequence
 *
 * Q: https://leetcode.com/problems/increasing-triplet-subsequence/
 * A: https://leetcode.com/problems/increasing-triplet-subsequence/discuss/977048/Kt-Js-Py3-Cpp-Construct-a-b-c
 */

let increasingTriplet = (A, a = Infinity, b = Infinity, c = Infinity) => {
    for (let x of A)
        if      (x <= a) a = x;
        else if (x <= b) b = x;
        else if (x <= c) c = x;
    return c < Infinity;
};
