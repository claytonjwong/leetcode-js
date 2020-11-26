/*
 * 395. Longest Substring with At Least K Repeating Characters
 *
 * Q: https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 * A: https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/discuss/949961/Kt-Js-Py3-Cpp-Recursively-Reduce-Search-Space-i..j
 */

let longestSubstring = (s, T, i = 0, j = 1e4, m = new Map(), need = new Set(), best = 0) => {
    j = Math.min(j, s.length);
    for (let k = i; k < j; ++k)
        m.set(s[k], 1 + (m.get(s[k]) || 0));
    for (let k = i; k < j; ++k)
        if (m.get(s[k]) < T)
            need.add(s[k]);
    if (!need.size)                        // 🎯 valid substring [i..j)
        return j - i;
    let next = [i - 1];                    // ⭐️ i - 1 since next indexes are non-inclusive, but i is inclusive
    for (let k = i; k < j; ++k)
        if (need.has(s[k]))
            next.push(k);
    next.push(j);
    for (let k = 1; k < next.length; ++k)  // 🚀 recursively search for valid substrings in between next indexes (previous + 1 because next indexes are non-inclusive)
         best = Math.max(best, longestSubstring(s, T, next[k - 1] + 1, next[k]));
    return best;
};
