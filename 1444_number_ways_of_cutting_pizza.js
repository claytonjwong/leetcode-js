/*
 * 1444. Number of Ways of Cutting a Pizza
 *
 * Q: https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/
 * A: https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/discuss/670177/Javascript-and-C%2B%2B-solutions
 */

// TLE without Memo
let ways = (A, T, ans = 0) => {
    let M = A.length,
        N = A[0].length;
    let dp = [...Array(M + 1)].map(row => Array(N + 1).fill(0));
    for (let i = M - 1; 0 <= i; --i)
        for (let j = N - 1; 0 <= j; --j)
            dp[i][j] = Number(A[i][j] == 'A') + dp[i + 1][j] + dp[i][j + 1] - dp[i + 1][j + 1];
    let go = (i = 0, j = 0, t = T - 1, cnt = 0) => {
        if (!dp[i][j])
            return 0; // no apple 🍎 ❌
        if (!t)
            return 1; // target t cuts 🎯
        for (let k = 1; i + k < M; ++k)
            if (dp[i][j] - dp[i + k][j] > 0) // upper piece contains at least one apple 🍏 ✅
                cnt = (cnt + go(i + k, j, t - 1)) % (1e9 + 7);
        for (let k = 1; j + k < N; ++k)
            if (dp[i][j] - dp[i][j + k] > 0) // left piece contains at least one apple 🍏 ✅
                cnt = (cnt + go(i, j + k, t - 1)) % (1e9 + 7);
        return cnt;
    };
    return go();
};

// AC with Memo
let ways = (A, T, m = new Map(), ans = 0) => {
    let M = A.length,
        N = A[0].length;
    let dp = [...Array(M + 1)].map(row => Array(N + 1).fill(0));
    for (let i = M - 1; 0 <= i; --i)
        for (let j = N - 1; 0 <= j; --j)
            dp[i][j] = Number(A[i][j] == 'A') + dp[i + 1][j] + dp[i][j + 1] - dp[i + 1][j + 1];
    let go = (i = 0, j = 0, t = T - 1, cnt = 0) => {
        let key = `${i},${j},${t}`;
        if (m.has(key))
            return m.get(key);
        if (!dp[i][j])
            return 0; // no apple 🍎 ❌
        if (!t)
            return 1; // target t cuts 🎯
        for (let k = 1; i + k < M; ++k)
            if (dp[i][j] - dp[i + k][j] > 0) // upper piece contains at least one apple 🍏 ✅
                cnt = (cnt + go(i + k, j, t - 1)) % (1e9 + 7);
        for (let k = 1; j + k < N; ++k)
            if (dp[i][j] - dp[i][j + k] > 0) // left piece contains at least one apple 🍏 ✅
                cnt = (cnt + go(i, j + k, t - 1)) % (1e9 + 7);
        m.set(key, cnt);
        return cnt;
    };
    return go();
};
console.log(ways(['A..','AAA','...'], 3));
console.log(ways(['A..','AA.','...'], 3));
console.log(ways(['A..','A..','...'], 1));
console.log(ways([".A","AA","A."], 3));