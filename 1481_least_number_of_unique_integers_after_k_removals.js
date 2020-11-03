/*
 * 1481. Least Number of Unique Integers after K Removals
 *
 * Q: https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/
 * A: https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/discuss/686410/Kt-Js-Py3-Cpp-Greedy-Drop-K-Least-Frequent-via-Map
 */

let findLeastNumOfUniqueInts = (A, K, m = new Map()) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    A.sort((a, b) => m.get(a) == m.get(b) ? a - b : m.get(a) - m.get(b));
    return new Set(A.slice(K)).size
};
