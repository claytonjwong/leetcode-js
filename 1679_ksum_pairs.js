/*
 * 1679. Max Number of K-Sum Pairs
 *
 * Q: https://leetcode.com/problems/max-number-of-k-sum-pairs/
 * A: https://leetcode.com/problems/max-number-of-k-sum-pairs/discuss/962118/Kt-Js-Py3-Cpp-Map
 */

let maxOperations = (A, k, m = new Map(), pairs = 0) => {
    for (let x of A) {
        let y = k - x;
        if (!m.has(y)) {
            m.set(x, 1 + (m.get(x) || 0));
            continue;
        }
        ++pairs;
        m.set(y, m.get(y) - 1);
        if (!m.get(y))
            m.delete(y);
    }
    return pairs;
};
