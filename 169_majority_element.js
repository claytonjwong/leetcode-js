/*
 * 169. Majority Element
 *
 * Q: https://leetcode.com/problems/majority-element/
 * A: https://leetcode.com/problems/majority-element/discuss/618622/Javascript-and-C%2B%2B-solutions
 */

let majorityElement = (A, m = new Map()) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    return [...m.entries()].filter(([_, cnt]) => cnt > A.length / 2).map(([x, _]) => x);
};