/*
 * 567. Permutation in String
 *
 * Q: https://leetcode.com/problems/permutation-in-string/
 * A: https://leetcode.com/problems/permutation-in-string/discuss/551220/Javascript-and-C%2B%2B-solutions
 */

// concise
let checkInclusion = (pattern, s, m = {}) => {
    pattern.split('').forEach(c => {
        if (!m[c]) m[c] = 0;
        ++m[c];
    });
    let N = s.length,
        K = pattern.length,
        i = 0,
        j = 0,
        need = K;
    while (j < N) {
        if (m[s[j]]-- > 0 && !--need) // no need unmet for anagram at s[i..j] 🎯
            return true;
        if (++j - i == K) { // always expand, only shrink when the window size is reached
            if (++m[s[i]] > 0) ++need;
            ++i;
        }
    }
    return false;
};

// verbose
let checkInclusion = (pattern, A, m = {}) => {
    pattern.split('').forEach(c => {
        if (!m[c]) m[c] = 0;
        ++m[c];
    });
    let N = A.length,
        K = pattern.length,
        need = K;
    for (let i = 0, j = 0; j < N; ++j) {
        if (j - i == K) { // shrink window
            if (++m[A[i]] > 0) // put
                ++need; // post-increment need based on what's really needed
            ++i;
        }
        if (m[A[j]]-- > 0) // take
            --need; // pre-decrement need based on what's actually available
        if (!need) // no need unmet for anagram at s[i..j] 🎯
            return true;
    }
    return false;
};