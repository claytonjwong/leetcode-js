/*
 * 997. Find the Town Judge
 *
 * Q: https://leetcode.com/problems/find-the-town-judge/
 * A: https://leetcode.com/problems/find-the-town-judge/discuss/602364/Javascript-and-C%2B%2B-solutions
 */

// set
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

// array
let findJudge = (N, T) => {
    let A = Array(N + 1).fill(0), // +1 for 1-based indexing
        B = Array(N + 1).fill(0);
    for (let [a, b] of T)
        ++A[a],
        ++B[b];
    for (let i = 1; i <= N; ++i)
        if (!A[i] && B[i] == N - 1)
            return i;
    return -1;
};