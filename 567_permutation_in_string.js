/*
 * 567. Permutation in String
 *
 * Q: https://leetcode.com/problems/permutation-in-string/
 * A: https://leetcode.com/problems/permutation-in-string/discuss/551220/Javascript-and-C%2B%2B-solutions
 */

let checkInclusion = (needle, haystack, m = new Map()) => {
    let M = needle.length,
        N = haystack.length;
    if (M > N) // if needle is larger than haystack, then its impossible to find needle in haystack ❌
        return false;
    for (let i = 0; i < M; ++i) {
        let c = needle[i];
        if (!m.has(c))
            m.set(c, 0);
        m.set(c, m.get(c) - 1);
    }
    for (let i = 0; i < M; ++i) {
        let c = haystack[i];
        if (m.has(c))
            m.set(c, m.get(c) + 1);
    }
    for (let i = M; i <= N; ++i) {
        if ([...m.values()].every(x => x == 0)) // target 🎯
            return true;
        if (i < N) { // slide window 👉
            let pre = haystack[i - M],
                cur = haystack[i];
            if (m.has(pre)) m.set(pre, m.get(pre) - 1);
            if (m.has(cur)) m.set(cur, m.get(cur) + 1);
        }
    }
    return false;
};