/*
 * 266. Palindrome Permutation
 *
 * Q: https://leetcode.com/problems/palindrome-permutation/
 * A: https://leetcode.com/problems/palindrome-permutation/discuss/592736/Javascript-and-C%2B%2B-solutions
 */
// map
let canPermutePalindrome = (s, m = new Map(), odd = 0) => {
    s.split('').forEach(c => m.set(c, 1 + (m.get(c) || 0)));
    [...m.values()].forEach(cnt => odd += cnt % 2);
    return odd < 2;
};
// set
let canPermutePalindrome = (s, seen = new Set()) => {
    s.split('').forEach(c => {
        if (seen.has(c))
            seen.delete(c); // evens are deleted eventually
        else
            seen.add(c);    // odds remain
    });
    return seen.size < 2;
};