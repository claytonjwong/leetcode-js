/*
 * 171. Excel Sheet Column Number
 *
 * Q: https://leetcode.com/problems/excel-sheet-column-number/
 * A: https://leetcode.com/problems/excel-sheet-column-number/discuss/594372/Javascript-and-C%2B%2B-solutions
 */

let titleToNumber = (S, ans = 0) => {
    let N = S.length;
    for (let i = N - 1, j = 1; i >= 0; --i, j *= 26)
        ans += (S[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * j;
    return ans;
};