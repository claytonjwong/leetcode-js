/*
 * 1573. Number of Ways to Split a String
 *
 * Q: https://leetcode.com/problems/number-of-ways-to-split-a-string/
 * A: https://leetcode.com/problems/number-of-ways-to-split-a-string/discuss/830433/Javascript-Python3-C%2B%2B-solutions
 */

let numWays = (S, MOD = Number(1e9 + 7)) => {
    let N = S.length;
    let cnt = S.split('').filter(c => c == '1').length;
    // case 1: all zeros, return the sum of the series for the cardinality of S minus 1
    if (!cnt)
        return (N - 2) * (N - 1) / 2 % MOD;
    // case 2: cannot evenly divide the ones into 3 equal paritions
    if (cnt % 3)
        return 0;
    // case 3: return the product of the first and second accumulated "gaps of zeros" between each parition of equal ones
    let K = cnt / 3,
        first = 0,
        second = 0;
    for (let i = 0, ones = 0; i < N; ++i) {
        if (S[i] == '1')
            ++ones;
        if (ones == 1 * K && S[i] == '0') ++first;
        if (ones == 2 * K && S[i] == '0') ++second;
    }
    return (first + 1) * (second + 1) % MOD;  // ⭐️ +1 for "gaps of zeros" from i..j inclusive
};
