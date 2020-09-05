/*
 * Biweekly Contest 34 (3651 / 10140)
 *
 * Ranking:     https://leetcode.com/contest/biweekly-contest-34/ranking
 * Screenshare: https://www.youtube.com/watch?v=WY60iZuPyCk
 *
 * Rank            Name            Score    Finish Time     Q1 (3)      Q2 (4)       Q3 (5)      Q4 (6)
 * 3651 / 10140    claytonjwong    7        1:27:15         0:02:12     1:12:15 *3
 */

/*
 * 1572. Matrix Diagonal Sum
 *
 * Q: https://leetcode.com/problems/matrix-diagonal-sum/
 * A: https://leetcode.com/problems/matrix-diagonal-sum/discuss/830407/Javascript-Python3-C%2B%2B-solutions
 */

 // 1-liner
 let diagonalSum = (A, N = A.length, f = Math.floor) => _.sum(A.map((_, i) => A[i][i] + A[i][N - 1 - i])) - (N & 1 ? A[f(N / 2)][f(N / 2)] : 0);

 // verbose
 let diagonalSum = (A, sum = 0, f = Math.floor) => {
    let N = A.length;
    for (let i = 0; i < N; ++i)
        sum += A[i][i] + A[i][N - 1 - i];  // 🎯 accumulate sum of both diagonals simultaneously
    if (N & 1)
        sum -= A[f(N / 2)][f(N / 2)];      // ⭐️ subtract middle element once if it was added twice
    return sum;
};


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
