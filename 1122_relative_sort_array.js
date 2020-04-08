/*
 * 1122. Relative Sort Array
 *
 * Q: https://leetcode.com/problems/relative-sort-array/
 * A: https://leetcode.com/problems/relative-sort-array/discuss/568451/Javascript-and-C%2B%2B-solutions
 */

let relativeSortArray = (A, order, m = new Map(), leftovers = [], ans = []) => {
    order.forEach(x => m.set(x, 0));
    A.forEach(x => {
        if (m.has(x))
            m.set(x, 1 + m.get(x));
        else
            leftovers.push(x);
    });
    order.forEach(x => ans = ans.concat(Array(m.get(x)).fill(x)));
    return ans.concat(leftovers.sort((a, b) => a - b));
};