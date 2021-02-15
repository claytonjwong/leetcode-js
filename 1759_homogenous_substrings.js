/*
 * 1759. Count Number of Homogenous Substrings
 *
 * Q: https://leetcode.com/problems/count-number-of-homogenous-substrings/
 * A: https://leetcode.com/problems/count-number-of-homogenous-substrings/discuss/1064522/Kt-Js-Py3-Cpp-Dynamic-Progamming
 */

// verbose
let countHomogenous = (s, mod = 1e9 + 7, ans = 0) => {
    let N = s.length;
    let dp = Array(N).fill(1);
    for (let i = 0; i < N; ++i) {
        if (i && s[i - 1] == s[i])
            dp[i] = (dp[i] + dp[i - 1]) % mod;
        ans = (ans + dp[i]) % mod;
    }
    return ans;
};

// concise
let countHomogenous = (s, mod = 1e9 + 7, last = '\0', pre = 1, cur = 1, ans = 0) => {
    for (let c of s) {
        cur = c == last ? 1 + pre : 1;
        ans = (ans + cur) % mod;
        pre = cur, last = c;
    }
    return ans;
};
