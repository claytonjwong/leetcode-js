/*
 * 767. Reorganize String
 *
 * Q: https://leetcode.com/contest/weekly-contest-68/problems/reorganize-string/
 * A: https://leetcode.com/problems/reorganize-string/discuss/113426/C%2B%2B-priority_queue-with-explanation-(EASY-to-understand)
 */

let reorganizeString = (s, t = [], m = new Map()) => {
    s.split('').forEach(c => m.set(c, 1 + (m.get(c) || 0)));
    let A = [...m.entries()].sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < s.length; ++i) {
        for (let j = 0; j < A.length; ++j) {
            if (!A[j][1])
                return '';
            if ((t.length && A[j][0] != t[t.length - 1]) || !t.length) {
                t.push(A[j][0]), --A[j][1];
                A = A.sort((a, b) => b[1] - a[1]);
                break;
            }
        }
    }
    return s.length == t.length ? t.join('') : '';
};