/*
 * 1009. Complement of Base 10 Intger
 *
 * Q: https://leetcode.com/problems/complement-of-base-10-integer/
 * A: https://leetcode.com/problems/complement-of-base-10-integer/discuss/613061/Javascript-Python3-C%2B%2B
 */

let bitwiseComplement = x => parseInt(x.toString(2).split('').map(bit => bit == '1' ? '0' : '1').join(''), 2);

let bitwiseComplement = (x, i = 1) => {
    while (i < x)
        i <<= 1;
    return !x ? !x : ~x & (i - 1);
};
