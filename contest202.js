/*
 * Rank            Name            Score    Finish Time    Q1 (3)     Q2 (4)    Q3 (5)   Q4 (6)
 * 4757 / 14373    claytonjwong    7        0:17:32        0:01:00    0:17:32
 */

/*
 * 1550. Three Consecutive Odds
 *
 * Q: https://leetcode.com/problems/three-consecutive-odds/
 * A: https://leetcode.com/problems/three-consecutive-odds/discuss/794079/Javascript-Python3-C%2B%2B-1-Liners-via-reduce()
 */

let threeConsecutiveOdds = A => A.reduce((found, _, i) => i < 2 ? found : found || ((A[i - 2] % 2) && (A[i - 1] % 2) && (A[i] % 2)), false);

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
