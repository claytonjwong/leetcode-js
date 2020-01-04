/*
 * 13. Roman to Integer
 *
 * Q: https://leetcode.com/problems/roman-to-integer/
 * A: https://leetcode.com/problems/roman-to-integer/discuss/469658/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {string} sym
 * @return {number}
 */
let romanToInt = (sym, val = 0) => {
    let m = new Map(
        [['I', 1], ['IV', 4], ['V', 5], ['IX', 9],
        ['X', 10], ['XL', 40], ['L', 50], ['XC', 90],
        ['C', 100], ['CD', 400], ['D', 500], ['CM', 900], ['M', 1000]]);
    let A = sym.split('');
    while (A.length > 1) {
        let two = A.slice(-2).join(''), one = A.slice(-1).join('');
        if (m.has(two))
            val += m.get(two), A = A.slice(0, A.length - 2);
        else
            val += m.get(one), A = A.slice(0, A.length - 1);
    }
    return val + (A.length == 1 ? m.get(A[0]) : 0);
};
let ans = romanToInt('III');
console.log(ans);