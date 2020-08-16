/*
 * 1551. Minimum Operations to Make Array Equal
 *
 * Q: https://leetcode.com/problems/minimum-operations-to-make-array-equal/discuss/794101/Javascript-Python3-C%2B%2B-Single-xor-Double-Middle
 * A: https://leetcode.com/problems/minimum-operations-to-make-array-equal/discuss/794101/Javascript-Python3-C%2B%2B-Single-xor-Double-Middle
 */

// concise
let minOperations = n => Math.floor(n / 2) * Math.floor((n + 1) / 2);

// verbose
let minOperations = (n, ans = 0) => {
    for (let i = 0, cur = n % 2 ? 2 : 1; i < Math.floor(n / 2); ++i, cur += 2)
        ans += cur;
    return ans;
};
