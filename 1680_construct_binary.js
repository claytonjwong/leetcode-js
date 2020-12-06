/*
 * 1680. Concatenation of Consecutive Binary Numbers
 *
 * Q: https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/
 * A: https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/discuss/962337/Kt-Js-Py3-Cpp-Construct-and-sum-Accumulate
 */

let concatenatedBinary = (N, s = [], k = 1, mod = Number(1e9 + 7), ans = 0) => {
    for (let x = 1; x <= N; ++x) {
        let pad = false;
        for (let i = Math.log2(x); 0 <= i; --i)
            if (x & (1 << i))
                s.push('1'), pad = true;
            else if (pad)
                s.push('0');
    }
    for (let c of s.reverse()) {
        if (c == '1')
            ans = (ans + k) % mod;
        k = 2 * k % mod;
    }
    return ans;
};
