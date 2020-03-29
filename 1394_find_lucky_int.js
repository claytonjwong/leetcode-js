/*
 * 1394. Find Lucky Integer in an Array
 *
 * Q1: https://leetcode.com/problems/find-lucky-integer-in-an-array/
 * A1: https://leetcode.com/problems/find-lucky-integer-in-an-array/discuss/554794/Javascript-and-C%2B%2B-solutions
 */

let findLucky = (A, m = new Map()) => {
    for (let x of A)
        m.set(x, 1 + (m.get(x) || 0));
    for (let [k, v] of [...m.entries()].sort((a, b) => a[0] - b[0]).reverse())
        if (k == v)
            return v; // 🍀 lucky number 🍀
    return -1;
};