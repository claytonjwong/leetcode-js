/*
 * 1711. Count Good Meals
 *
 * Q: https://leetcode.com/problems/count-good-meals/
 * A: https://leetcode.com/problems/count-good-meals/discuss/1001864/Kt-Js-Py3-Cpp-Map-%2B-Brute-Force-Search
 */

let countPairs = (A, m = new Map(), cnt = 0) => {
    A.forEach(x => {
        for (let t = 1; t <= (1 << 21); t <<= 1) {
            let y = t - x;
            if (m.has(y))
                cnt = (cnt + m.get(y)) % (1e9 + 7);
        }
        m.set(x, 1 + (m.get(x) || 0));
    });
    return cnt;
};
