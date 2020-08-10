/*
 * 171. Excel Sheet Column Number
 *
 * Q: https://leetcode.com/problems/excel-sheet-column-number/
 * A: https://leetcode.com/problems/excel-sheet-column-number/discuss/594372/Javascript-Python3-C%2B%2B-1-Liners
 */

// concise
let titleToNumber = s => s.split('').reverse().map((c, i) => (c.charCodeAt(0) - 64) * Math.pow(26, i)).reduce((a, b) => a + b);

// verbose
let titleToNumber = (S, ans = 0) => {
    let N = S.length;
    for (let i = N - 1, j = 1; i >= 0; --i, j *= 26)
        ans += (S[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * j;
    return ans;
};
