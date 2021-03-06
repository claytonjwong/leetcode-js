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
// let romanToInt = (s, val = 0, m = new Map([['I', 1], ['IV', 4], ['V', 5], ['IX', 9], ['X', 10], ['XL', 40], ['L', 50], ['XC', 90], ['C', 100], ['CD', 400], ['D', 500], ['CM', 900], ['M', 1000]])) => {
//     let A = s.split('');
//     while (A.length > 1) {
//         let n = A.length, two = A.slice(-2).join(''), one = A.slice(-1).join('');
//         if (m.has(two))
//             val += m.get(two), A = A.slice(0, n - 2);
//         else
//             val += m.get(one), A = A.slice(0, n - 1);
//     }
//     return val + (A.length == 0 ? 0 : m.get(A[0]));
// };

let romanToInt = (s, pre = 0, ans = 0) => {
    let m = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    for (let c of s.split('').reverse().join('')) {
        cur = m[c];
        ans += cur < pre ? -cur : cur;
        pre = cur;
    }
    return ans;
};

let ans = romanToInt('III');
console.log(ans);