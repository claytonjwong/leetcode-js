/*
 * 799. Champagne Tower
 *
 * Q: https://leetcode.com/problems/champagne-tower/
 * A: https://leetcode.com/problems/champagne-tower/discuss/118694/Kt-Js-Py3-Cpp-The-ART-of-Dynamic-Programming
 */

// bottom-up
let champagneTower = (K, M, N) => {
    let dp = [...Array(M + 1)].map(_ => Array(N + 2).fill(0));
    dp[0][0] = K;
    for (let i = 0; i < M; ++i) {
        for (let j = 0; j <= N; ++j) {
            if (dp[i][j] <= 1.0)  // no overflow
                continue;
            let half = (dp[i][j] - 1.0) / 2;  // -1.0 to fill cup i,j
            dp[i + 1][j]     += half;
            dp[i + 1][j + 1] += half;
        }
    }
    return Math.min(dp[M][N], 1.0);
};


// memory optimized
let champagneTower = (K, M, N) => {
    let pre = Array(N + 2).fill(0.0);
    pre[0] = K;
    while (M--) {
        let cur = Array(N + 2).fill(0.0);
        for (let j = 0; j <= N; ++j) {
            if (pre[j] <= 1.0)  // no overflow
                continue;
            let half = (pre[j] - 1.0) / 2;  // -1.0 to fill cup i,j
            cur[j]     += half;
            cur[j + 1] += half;
        }
        [pre, cur] = [cur, pre];
    }
    return Math.min(pre[N], 1.0);
};
