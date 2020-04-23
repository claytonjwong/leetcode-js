/*
Apple Phone Interview
Completed April 22, 2020 6:11 PM
Time Spent: 10 minutes 35 seconds
Time Allotted: 1 hour 30 minutes
*/

/*
 * 594. Longest Harmonious Subsequence
 *
 * Q: https://leetcode.com/problems/longest-harmonious-subsequence/
 * A: https://leetcode.com/problems/longest-harmonious-subsequence/discuss/592722/Javascript-and-C%2B%2B-solutions
 */
let findLHS = (A, m = new Map(), max = 0) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    for (let [x, _] of m)
        if (m.has(x - 1))
            max = Math.max(max, m.get(x - 1) + m.get(x))
    return max;
};

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