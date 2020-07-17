/*
 * 347. Top K Frequent Elements
 *
 * Q: https://leetcode.com/problems/top-k-frequent-elements/
 * A: https://leetcode.com/problems/top-k-frequent-elements/discuss/740792/Javascript-Python3-C%2B%2B
 */

let topKFrequent = (A, K, m = new Map()) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    return [...m.entries()].sort((a, b) => b[1] - a[1]).map(pair => pair[0]).slice(0, K);
};
