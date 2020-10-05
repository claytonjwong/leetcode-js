/*
 * 532. K-diff Pairs in an Array
 *
 * Q: https://leetcode.com/problems/k-diff-pairs-in-an-array/
 * A: https://leetcode.com/problems/k-diff-pairs-in-an-array/discuss/596830/Javascript-Python3-C%2B%2B-Concise-solutions
 */

let findPairs = (A, K, seen = new Set(), pairs = new Set()) => {
    let pair = (a, b) => pairs.add(a < b ? `${a},${b}` : `${b},${a}`);
    for (let x of A) {
        if (seen.has(x - K)) pair(x, x - K);
        if (seen.has(x + K)) pair(x, x + K);
        seen.add(x);
    }
    return pairs.size;
};
