/*
 * 290. Word Pattern
 *
 * Q: https://leetcode.com/problems/word-pattern/
 * A: https://leetcode.com/problems/word-pattern/discuss/622795/Javascript-and-C%2B%2B-solutions
 */

let wordPattern = (P, words, m = new Map(), seen = new Set()) => {
    let A = words.split(' ');
    if (P.length != A.length)
        return false;
    for (let i = 0; i < A.length; ++i) {
        if (!m.has(P[i]) && !seen.has(A[i])) {
            m.set(P[i], A[i]);
            seen.add(A[i]);
        }
        if (m.get(P[i]) != A[i])
            return false;
    }
    return true;
};