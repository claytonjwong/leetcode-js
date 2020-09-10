/*
 * 3. Longest Substring Without Repeating Characters
 *
 * Q: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * A: https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/504179/Javascript-Python3-C%2B%2B-Previously-Seen-Duplicate
 */

let lengthOfLongestSubstring = (S, m = new Map(), pre = -1, max = 0) => {
    S.split('').forEach((c, i) => {
        pre = Math.max(pre, m.has(c) ? m.get(c) : -1), m.set(c, i);  // 👀 track index of previously seen duplicate
        max = Math.max(max, i - pre);                                // 🎯 maximum substring length without duplicate
    });
    return max;
};
