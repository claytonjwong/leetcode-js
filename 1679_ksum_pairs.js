/*
 * 1679. Max Number of K-Sum Pairs
 *
 * Q: https://leetcode.com/problems/max-number-of-k-sum-pairs/
 * A: https://leetcode.com/problems/max-number-of-k-sum-pairs/discuss/962118/Kt-Js-Py3-Cpp-Map
 */

let maxOperations = (A, T, m = new Map(), cnt = 0) => {
    for (let x of A) {
        let y = T - x;
        if (m.has(y) && m.get(y))
            m.set(y, -1 + m.get(y)), ++cnt;
        else
            m.set(x,  1 + (m.get(x) || 0));
    }
    return cnt;
};
