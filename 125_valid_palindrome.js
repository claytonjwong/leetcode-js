/*
 * 125. Valid Palindrome
 *
 * Q: https://leetcode.com/problems/valid-palindrome/
 * A: https://leetcode.com/problems/valid-palindrome/discuss/580012/Javascript-and-C%2B%2B-solutions
 */

let isPalindrome = S => {
    let A = S.toLowerCase().split('').filter(c => {
        let ord = c.charCodeAt(0);
        return (97 <= ord && ord <= 122) || (48 <= ord && ord <= 57); // alphanumeric
    });
    return A.join('') == A.reverse().join('');
};