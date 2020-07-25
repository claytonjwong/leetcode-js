/*
 * 1460. Make Two Arrays Equal by Reversing Sub-arrays
 *
 * Q: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
 * A: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/discuss/660539/Javascript-and-C%2B%2B-solutions
 */

// count frequency
let canBeEqual = (T, A, m = new Map()) => {
    T.forEach(x => m.set(x,  1 + (m.get(x) || 0)));
    A.forEach(x => m.set(x, -1 + (m.get(x) || 0)));
    return [...m.values()].every(x => !x);
};

// sort + compare
let canBeEqual = (A, B) => A.sort((a, b) => a - b).join('') == B.sort((a, b) => a - b).join('');
