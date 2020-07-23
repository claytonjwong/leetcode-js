/*
 * 260. Single Number III
 *
 * Q: https://leetcode.com/problems/single-number-iii/
 * A: https://leetcode.com/problems/single-number-iii/discuss/750939/Javascript-Python3-C%2B%2B-Seen-and-Counter-solutions-O(N)-memory
 */

// seen set
let singleNumber = (A, seen = new Set()) => {
    for (let x of A)
        seen.has(x) ? seen.delete(x) : seen.add(x); // 🚫 remove x seen twice 👀 and ✅ keep x seen once 👀
    return [...seen];
};

// counter
let singleNumber = (A, m = new Map()) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    return [...m.entries()].filter(([x, cnt]) => cnt == 1).map(([x, _]) => x);
}
