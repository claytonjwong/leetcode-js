/*
 * 1094. Car Pooling
 *
 * Q: https://leetcode.com/problems/car-pooling/
 * A: https://leetcode.com/problems/car-pooling/discuss/857714/Javascript-Python3-C%2B%2B-Map-solutions
 */

let carPooling = (A, K, m = new Map(), total = 0) => {
    for (let [n, i, j] of A)
        m.set(i,  n + (m.get(i) || 0)),
        m.set(j, -n + (m.get(j) || 0));
    for (let [_, n] of [...m.entries()].sort((a, b) => a[0] - b[0]))
        if (K < (total += n))
            return false;
    return true;
};
