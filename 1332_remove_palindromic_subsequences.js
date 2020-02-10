/*
 * 1332. Remove Palindromic Subsequences
 *
 * Q: https://leetcode.com/problems/remove-palindromic-subsequences/
 * A: https://leetcode.com/problems/remove-palindromic-subsequences/discuss/490744/Javascript-and-C%2B%2B-solutions
 */

let removePalindromeSub = s => {
    return s.length == 0 ? 0 : s == s.split('').reverse().join('') ? 1 : 2;
};

console.log(removePalindromeSub('baabbaaaaa'));