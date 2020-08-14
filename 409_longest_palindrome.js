/*
 * 409. Longest Palindrome
 *
 * Q: https://leetcode.com/problems/longest-palindrome/
 * A: https://leetcode.com/problems/longest-palindrome/discuss/791485/Javascript-Python3-C%2B%2B-even-count-odd-count-%2B-1
 */

let longestPalindrome = (s, m = new Map()) => {
    s.split('').forEach(c => m.set(c, 1 + (m.get(c) || 0)));
    let odd = _.sum([...m.entries()].map(([_, cnt]) => cnt % 2));
    return s.length - odd + (odd ? 1 : 0);
};
