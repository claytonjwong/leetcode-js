/*
 * 1015. Smallest Integer Divisible by K
 *
 * Q: https://leetcode.com/problems/smallest-integer-divisible-by-k/
 * A: https://leetcode.com/problems/smallest-integer-divisible-by-k/discuss/261255/Kt-Js-Py3-Cpp-Mod-K
 */

let smallestRepunitDivByK = (K, i = 1, N = 1, seen = new Set()) => {
    for (let i = 1;; ++i) {
        let mod = N % K;
        if (!mod)
            return i;
        if (seen.has(mod))
            break;
        seen.add(mod);
        N = (10 * N + 1) % K;
    }
    return -1;
};
