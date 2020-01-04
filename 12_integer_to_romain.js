/*
 * 12. Integer to Roman
 *
 * Q: https://leetcode.com/problems/integer-to-roman/
 * A: https://leetcode.com/problems/integer-to-roman/discuss/469410/Javascript-and-C%2B%2B-solutions
 */

let intToRoman = (num, ans = []) => {
    while (num >= 1000) ans.push('M'),     num -= 1000;
    while (num >=  900) ans.push(...'CM'), num -= 900;
    while (num >=  500) ans.push('D'),     num -= 500;
    while (num >=  400) ans.push(...'CD'), num -= 400;
    while (num >=  100) ans.push('C'),     num -= 100;
    while (num >=   90) ans.push(...'XC'), num -= 90;
    while (num >=   50) ans.push('L'),     num -= 50;
    while (num >=   40) ans.push(...'XL'), num -= 40;
    while (num >=   10) ans.push('X'),     num -= 10;
    while (num >=    9) ans.push(...'IX'), num -= 9;
    while (num >=    5) ans.push('V'),     num -= 5;
    while (num >=    4) ans.push(...'IV'), num -= 4;
    while (num >=    1) ans.push('I'),     num -= 1
    return ans.join('');
};