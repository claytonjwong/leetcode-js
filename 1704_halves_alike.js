/*
 * 1704. Determine if String Halves Are Alike
 *
 * Q: https://leetcode.com/problems/determine-if-string-halves-are-alike/
 * A: https://leetcode.com/problems/determine-if-string-halves-are-alike/discuss/988139/kt-js-py3-cpp-halves-equal-vowel-count
 */

let halvesAreAlike = (s, vowel = new Set(['a', 'e', 'i', 'o', 'u'])) => {
    let N = s.length,
        K = Math.floor(N / 2);
    let a = s.substring(0, K),
        b = s.substring(K, N);
    let isVowel = c => vowel.has(c.toLowerCase());
    return a.split('').filter(c => isVowel(c)).length == b.split('').filter(c => isVowel(c)).length;
};
