/*
 * 316. Remove Duplicate Letters
 *
 * Q: https://leetcode.com/problems/remove-duplicate-letters/
 * A: https://leetcode.com/problems/remove-duplicate-letters/discuss/890223/Kt-Js-Py3-C%2B%2B-Monotonic-Queue-%2B-Detailed-Explanation
 */

let removeDuplicateLetters = (s, last = new Map(), have = new Set(), A = []) => {
    A.back = () => A[A.length - 1];
    let ord = c => c.charCodeAt(0);
    s.split('').forEach((c, i) => last.set(c, i));
    s.split('').forEach((c, i) => {
        while (!have.has(c) && A.length && ord(c) < ord(A.back()) && i < last.get(A.back()))
            have.delete(A.back()), A.pop();
        if (!have.has(c))
            have.add(c), A.push(c);
    });
    return A.join('');
};
