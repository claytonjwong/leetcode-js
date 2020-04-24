/*
 * 482. License Key Formatting
 *
 * Q: https://leetcode.com/problems/license-key-formatting/
 * A: https://leetcode.com/problems/license-key-formatting/discuss/594395/Javascript-and-C%2B%2B-solutions
 */

let licenseKeyFormatting = (S, K, ans = []) => {
    let A = S.split('').filter(c => c != '-').map(c => c.toUpperCase()).reverse();
    for (let i = 0; i < A.length; ++i) {
        if (i > 0 && i % K == 0)
            ans.push('-');
        ans.push(A[i]);
    }
    return ans.reverse().join('');
};