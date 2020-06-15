/*
 * 1481. Least Number of Unique Integers after K Removals
 *
 * Q: https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/
 * A: https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/discuss/686410/Javascript-and-C%2B%2B-solutions
 */
let findLeastNumOfUniqueInts = (A, K, m = new Map(), all = []) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    [...m.entries()].sort((a, b) => a[1] - b[1]).forEach(([x, n]) => all.push(...Array(n).fill(x))); // sort all by ascending frequency (x occurs n times)
    return new Set(all.slice(K)).size; // greedily drop first K least freq nums and return size of remaining set
};