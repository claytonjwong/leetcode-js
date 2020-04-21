/*
 * 1250. Check If It Is a Good Array
 *
 * Q: https://leetcode.com/problems/check-if-it-is-a-good-array/
 * A: https://leetcode.com/problems/check-if-it-is-a-good-array/discuss/590623/Javascript-and-C%2B%2B-solutions
 */

let isGoodArray = (A, gcd = (a, b) => !b ? a : gcd(b, a % b)) => {
    let x = A.shift();
    A.forEach(y => x = gcd(x, y));
    return x == 1;
};