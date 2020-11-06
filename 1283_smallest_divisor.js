/*
 * 1283. Find the Smallest Divisor Given a Threshold
 *
 * Q: https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
 * A: https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/discuss/925931/Kt-Js-Py3-Cpp-Binary-Search
 */

let smallestDivisor = (A, T) => {
    let f = div => _.sum(A.map(num => Math.ceil(num / div)));
    let i = 1,
        j = 1e6;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        if (T < f(k))
            i = k + 1;
        else
            j = k;
    }
    return i;
};
