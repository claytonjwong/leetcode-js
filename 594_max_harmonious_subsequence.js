/*
 * 594. Longest Harmonious Subsequence
 *
 * Q: https://leetcode.com/problems/longest-harmonious-subsequence/
 * A: https://leetcode.com/problems/longest-harmonious-subsequence/discuss/592722/Javascript-and-C%2B%2B-solutions
 */
let findLHS = (A, m = new Map(), max = 0) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    for (let [x, _] of m)
        if (m.has(x - 1))
            max = Math.max(max, m.get(x - 1) + m.get(x))
    return max;
};