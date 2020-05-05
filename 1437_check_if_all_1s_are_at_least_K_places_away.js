/*
 * 1437. Check If All 1's Are at Least Length K Places Away
 *
 * Q: https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
 * A: https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/discuss/613577/Javascript-and-C%2B%2B-solutions
 */

let kLengthApart = (A, K, index = []) => {
    A.forEach((x, i) => {
        if (x)
            index.push(i);
    });
    return index.every((_, i) => i == 0 || index[i] - index[i - 1] > K);
};