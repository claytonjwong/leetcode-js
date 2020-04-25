/*
 * 532. K-diff Pairs in an Array
 *
 * Q: https://leetcode.com/problems/k-diff-pairs-in-an-array/
 * A: https://leetcode.com/problems/k-diff-pairs-in-an-array/discuss/596830/Javascript-and-C%2B%2B-solutions
 */

let findPairs = (A, K, m = new Map(), seen = new Set(), cnt = 0) => {
    A.sort((a, b) => a - b).forEach(x => {
        if (!K) {
            m.set(x, 1 + (m.get(x) || 0)),
            cnt += m.get(x) == 2;
        } else
            cnt += !seen.has(x) && seen.has(x - K);
        seen.add(x);
    });
    return cnt;
};