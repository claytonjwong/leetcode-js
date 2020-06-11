/*
 * 75. Sort Colors
 *
 * Q: https://leetcode.com/problems/sort-colors/
 * A: https://leetcode.com/problems/sort-colors/discuss/681992/Javascript-and-C%2B%2B-solutions
 */

let sortColors = (A, m = new Map(), i = 0) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    [0, 1, 2].forEach(x => {
        let cnt = m.get(x);
        while (cnt--)
            A[i++] = x;
    });
};