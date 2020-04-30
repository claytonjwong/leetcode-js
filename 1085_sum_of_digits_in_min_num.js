/*
 * 1085. Sum of Digits in the Minimum Number
 *
 * Q: https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/
 * A: https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/discuss/603712/Javascript-and-C%2B%2B-solutions
 */

let sumOfDigits = A => {
    let sum = x => x ? x % 10 + sum(Math.floor(x / 10)) : 0;
    return sum(Math.min(...A)) % 2 == 0;
};