/*
 * 1624. Largest Substring Between Two Equal Characters
 *
 * Q: https://leetcode.com/problems/largest-substring-between-two-equal-characters/
 * A: https://leetcode.com/problems/largest-substring-between-two-equal-characters/discuss/900287/Kt-Js-Py3-Cpp-Map-(concise-%2B-verbose)-solutions
 */

// concise
let maxLengthBetweenEqualCharacters = (s, m = new Map()) => {
    s.split('').forEach((c, i) => m.set(c, i));
    return Math.max(...s.split('').map((c, i) => m.get(c) - i - 1));  // -1 for (i..j) non-inclusive
};

// verbose
let maxLengthBetweenEqualCharacters = (s, m = new Map(), best = -1) => {
    s.split('').forEach((c, i) => {
        if (m.has(c))
            best = Math.max(best, i - m.get(c) - 1);  // -1 for (i..j) non-inclusive
        else
            m.set(c, i);
    });
    return best;
};
