/*
 * 266. Palindrome Permutation
 *
 * Q: https://leetcode.com/problems/palindrome-permutation/
 * A: https://leetcode.com/problems/palindrome-permutation/discuss/592736/Kt-Js-Py3-Cpp-Seen-Odd
 */

let canPermutePalindrome = (s, seen = new Set()) => {
    s.split('').forEach(c => seen.has(c) ? seen.delete(c) : seen.add(c));
    return seen.size <= 1;
};
