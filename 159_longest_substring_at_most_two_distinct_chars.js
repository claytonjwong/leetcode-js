/*
 * 159. Longest Substring with At Most Two Distinct Characters
 *
 * Q: https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
 * A: https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/discuss/854873/Kt-Js-Py3-Cpp-Sliding-Window-%2B-Map
 */

let lengthOfLongestSubstringTwoDistinct = (s, m = new Map(), best = 0) => {
    let N = s.length,
        i = 0,
        j = 0;
    while (j < N) {
        m.set(s[j], (m.get(s[j]) || 0) + 1), ++j;  // ✅ expand window with s[j]
        while (2 < m.size) {                       // ❌ shrink window with s[i] until there are at most 2 distinct chars
            m.set(s[i], m.get(s[i]) - 1);
            if (!m.get(s[i]))
                m.delete(s[i]);
            ++i;
        }
        best = Math.max(best, j - i);              // 🎯 longest substring with at most 2 distinct chars
    }
    return best;
};
