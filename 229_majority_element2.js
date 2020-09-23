/*
 * 229. Majority Element II
 *
 * Q: https://leetcode.com/problems/majority-element-ii/
 * A: https://leetcode.com/problems/majority-element-ii/discuss/859901/Javascript-Python3-C%2B%2B-Naive-solutions
 */

let majorityElement = (A, m = new Map(), N = A.length) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    return [...m.entries()].filter(([_, cnt]) => N / 3 < cnt).map(([x, _]) => x);
};
