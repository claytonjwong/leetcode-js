/*
 * 3. Longest Substring Without Repeating Characters
 *
 * Q: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * A: https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/504179/Kt-Js-Py3-Cpp-Best-i-Last-Seen-Duplicate-Index
 */

let lengthOfLongestSubstring = (s, m = new Map(), last = -1, best = 0) => {
    s.split('').forEach((c, i) => {
        last = Math.max(last, m.has(c) ? m.get(c) : -1), m.set(c, i);
        best = Math.max(best, i - last);
    });
    return best;
};
