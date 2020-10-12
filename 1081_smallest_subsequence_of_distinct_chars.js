/*
 * 1081. Smallest Subsequence of Distinct Characters
 *
 * Q: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 * A: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/discuss/891644/Kt-Js-Py3-C%2B%2B-Monotonic-Queue-%2B-Detailed-Explanation
 */

let smallestSubsequence = (s, A = [], have = new Set(), last = new Map()) => {
    A.back = () => A[A.length - 1];
    let ord = c => c.charCodeAt(0);
    s.split('').forEach((c, i) => last.set(c, i));
    s.split('').forEach((c, i) => {
        while (!have.has(c) && A.length && ord(c) < ord(A.back()) && i < last.get(A.back()))
            have.delete(A.pop());
        if (!have.has(c))
            have.add(c), A.push(c);
    });
    return A.join('');
};
