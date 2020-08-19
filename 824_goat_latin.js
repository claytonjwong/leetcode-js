/*
 * 824. Goat Latin
 *
 * Q: https://leetcode.com/problems/goat-latin/
 * A: https://leetcode.com/problems/goat-latin/discuss/128096/3-liner-C%2B%2B
 */

let toGoatLatin = (words, isVowel = c => 0 <= 'aeiou'.indexOf(c.toLowerCase())) =>
    words.split(' ')
        .map(s => isVowel(s[0]) ? s : s.substring(1, s.length) + s[0])
        .map((s, i) => s + 'ma' + 'a'.repeat(i + 1)).join(' ');
