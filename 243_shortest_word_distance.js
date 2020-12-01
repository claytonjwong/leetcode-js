/*
 * 243. Shortest Word Distance
 *
 * Q: https://leetcode.com/problems/shortest-word-distance/
 * A: https://leetcode.com/problems/shortest-word-distance/discuss/670999/Kt-Js-Py3-Cpp-Last-Seen-K-th-Index
 */

let shortestDistance = (A, s, t, i = -1, j = -1, best = Infinity) => {
    A.forEach((word, k) => {
        if (word == s) i = k;
        if (word == t) j = k;
        if (-1 < i && -1 < j)
            best = Math.min(best, Math.abs(i - j));
    });
    return best;
};
