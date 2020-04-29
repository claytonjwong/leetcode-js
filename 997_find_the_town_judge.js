/*
 * 997. Find the Town Judge
 *
 * Q: https://leetcode.com/problems/find-the-town-judge/
 * A: https://leetcode.com/problems/find-the-town-judge/discuss/602364/Javascript-and-C%2B%2B-solutions
 */

let findJudge = (N, A, T = new Map(), all = new Set()) => {
    for (let [a, b] of A) {
        all.add(a); // all whom have trust
        T.set(b, (T.get(b) || new Set()).add(a)); // b is trusted by a
    }
    for (let [x, t] of T.entries())
        if (!all.has(x) && t.size == N - 1) // x trusts no one and is trusted by N - 1 others 🎯
            return x;
    return N == 1 ? 1 : -1;
};