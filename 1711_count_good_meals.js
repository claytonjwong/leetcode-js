/*
 * 1711. Count Good Meals
 *
 * Q: https://leetcode.com/problems/count-good-meals/
 * A: https://leetcode.com/problems/count-good-meals/discuss/1001864/Kt-Js-Py3-Cpp-Map-%2B-Brute-Force-Search
 */

let countPairs = (A, m = new Map(), mod = 1e9 + 7, cnt = 0) => {
    A.map(BigInt).forEach(x => {
        for (let t = BigInt(1); t <= 100 * 1e9; t *= 2n) {
            let y = t - x;
            if (m.has(y))
                cnt = (cnt + m.get(y)) % mod;
        }
        m.set(x, 1 + (m.get(x) || 0));
    });
    return cnt;
};
