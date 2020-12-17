/*
 * 454. 4Sum II
 *
 * Q: https://leetcode.com/problems/4sum-ii/
 * A: https://leetcode.com/problems/4sum-ii/discuss/975519/Kt-Js-Py3-Cpp-Map
 */

let fourSumCount = (A, B, C, D, m = new Map(), cnt = 0) => {
    for (let a of A)
        for (let b of B)
            m.set(a + b, 1 + (m.get(a + b) || 0));
    for (let c of C)
        for (let d of D)
            if (m.has(-(c + d)))
                cnt += m.get(-(c + d));
    return cnt;
};
