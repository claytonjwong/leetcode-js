/*
 * 1447. Simplified Fractions
 *
 * Q: https://leetcode.com/contest/biweekly-contest-26/problems/simplified-fractions/
 * A: https://leetcode.com/problems/simplified-fractions/discuss/639812/Javascript-and-C%2B%2B-solutions
 */

let simplifiedFractions = (N, ans = []) => {
    let gcd = (a, b) => !b ? a : gcd(b, a % b);
    for (let j = 2; j <= N; ++j)
        for (let i = 1; i < j; ++i)
            if (gcd(i, j) == 1)
                ans.push(`${i}/${j}`);
    return ans;
};