/*
 * 692. Top K Frequent Words
 *
 * Q: https://leetcode.com/problems/top-k-frequent-words/
 * A: https://leetcode.com/problems/top-k-frequent-words/discuss/154012/C%2B%2B-solution-using-priority_queue
 */

let topKFrequent = (A, K, m = new Map()) => {
    A.forEach(word => m.set(word, 1 + (m.get(word) || 0)));
    return [...m.entries()]
        .sort((a, b) => a[1] != b[1] ? b[1] - a[1] : a[0].localeCompare(b[0]))
        .map(a => a[0])
        .slice(0, K);
};