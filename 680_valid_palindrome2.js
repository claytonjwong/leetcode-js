/*
 * 680. Valid Palindrome II
 *
 * Q: https://leetcode.com/problems/valid-palindrome-ii/
 * A: https://leetcode.com/problems/valid-palindrome-ii/discuss/580019/Javascript-and-C%2B%2B-solutions
 */

let validPalindrome = S => {
    let N = S.length, i = 0, j = N - 1;
    while (i < j && S[i] == S[j]) ++i, --j;
    let ok = s => s == s.split('').reverse().join('');
    return i >= j || ok(S.substring(i, j)) || ok(S.substring(i + 1, j + 1));  // with all, without j, without i
};