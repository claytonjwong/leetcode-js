/*
 * 137. Single Number II
 *
 * Q: https://leetcode.com/problems/single-number-ii/
 * A: https://leetcode.com/problems/single-number-ii/discuss/700338/Javascript-and-C%2B%2B-solutions
 */

let singleNumber = (A, m = new Map()) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    return [...m.entries()].filter(([x, cnt]) => cnt == 1)[0][0];
};
