/*
 * 476. Number Complement
 *
 * Q: https://leetcode.com/problems/number-complement/
 * A: https://leetcode.com/problems/number-complement/discuss/613046/Javascript-and-C%2B%2B-solutions
 */

let findComplement = (x, i = 1) => {
    while (i < x)
        i *= 2;
    return ~x & (i - 1);
};