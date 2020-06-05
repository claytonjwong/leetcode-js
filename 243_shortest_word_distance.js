/*
 * 243. Shortest Word Distance
 *
 * Q: https://leetcode.com/problems/shortest-word-distance-iii/
 * A: https://leetcode.com/problems/shortest-word-distance/discuss/670999/Javascript-and-C%2B%2B-solutions
 */

let shortestDistance = (A, s, t, min = Infinity) => {
    let N = A.length,
        i = -1,
        j = -1;
    for (let k = 0; k < N; ++k) {
        if (A[k] == s) i = k;
        if (A[k] == t) j = k;
        if (0 <= i && 0 <= j)
            min = Math.min(min, Math.abs(i - j));
    }
    return min;
};