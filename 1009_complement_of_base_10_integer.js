/*
 * 1009. Complement of Base 10 Intger
 *
 * Q: https://leetcode.com/problems/complement-of-base-10-integer/
 * A: https://leetcode.com/problems/complement-of-base-10-integer/discuss/613061/Javascript-and-C%2B%2B-solutions
 */

let bitwiseComplement = (x, i = 1) => {
    while (i < x)
        i *= 2;
    return !x ? !x : ~x & (i - 1);
};