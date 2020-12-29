/*
 * 340. Longest Substring with At Most K Distinct Characters
 *
 * Q: https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
 * A: https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/discuss/992358/Kt-Js-Py3-Cpp-Sliding-Window-%2B-Map
 */

let lengthOfLongestSubstringKDistinct = (s, k, m = new Map(), best = 0) => {
    let i = 0,
        j = 0,
        N = s.length;
    while (j < N) {
        m.set(s[j], 1 + (m.get(s[j]) || 0)), ++j;
        while (k < m.size) {                       // ⭐️ maintain invariant
            m.set(s[i], -1 + m.get(s[i]));
            if (!m.get(s[i]))
                m.delete(s[i]);
            ++i;
        }
        best = Math.max(best, j - i);              // 🎯 maximum length window
    }
    return best;
};
