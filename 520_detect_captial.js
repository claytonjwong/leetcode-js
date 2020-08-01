/*
 * 520. Detect Capital
 *
 * Q: https://leetcode.com/problems/detect-capital/
 * A: https://leetcode.com/problems/detect-capital/discuss/766995/Javascript-Python3-C%2B%2B-1-Liners-%2B-Lambdas
 */

// 1-Liner
let detectCapitalUse = s =>
    s.split('').every(c => 97 <= c.charCodeAt(0)) ||
    s.split('').every(c => c.charCodeAt(0) <= 90) ||
    (s[0].charCodeAt(0) <= 90 && s.substring(1, s.length).split('').every(c => 97 <= c.charCodeAt(0)));

// 3-Liner
let upper = s => s.split('').every(c => c.charCodeAt(0) <= 90),
    lower = s => s.split('').every(c => 97 <= c.charCodeAt(0));
let detectCapitalUse = s => upper(s) || lower(s) || (upper(s[0]) && lower(s.substring(1, s.length)));
