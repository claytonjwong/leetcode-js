/*
 * 1540. Can Convert String in K Moves
 *
 * Q: https://leetcode.com/problems/can-convert-string-in-k-moves/
 * A: https://leetcode.com/problems/can-convert-string-in-k-moves/discuss/780454/Javascript-Python3-C%2B%2B-add-%2B-del-needs
 */

// verbose
let canConvertString = (s, t, K, need = {}, needs = 0) => {
    if (s.length != t.length)
        return false;
    // ✅ add needs
    for (let i = 0; i < s.length; ++i) {
        let diff = (t[i].charCodeAt(0) - s[i].charCodeAt(0) + 26) % 26;
        if (diff)
            need[diff] = need[diff] ? 1 + need[diff] : 1, ++needs;
    }
    // 🚫 del needs
    for (let i = 1; i <= K && needs; ++i) {
        let diff = i % 26;
        if (need[diff])
            --need[diff], --needs;
    }
    return !needs; // 🎯 no needs
};

// concise
let canConvertString = (s, t, T, need = {}) => {
    if (s.length != t.length)
        return false;
    // ✅ add needs
    for (let i = 0; i < s.length; ++i) {
        let k = (t[i].charCodeAt(0) - s[i].charCodeAt(0) + 26) % 26;
        if (k)
            need[k] = need[k] ? 1 + need[k] : 1;
    }
    // check if T is 🚫 insufficient for the needs
    for (let [k, cnt] of Object.entries(need))
        if (T < Number(k) + (cnt - 1) * 26)
            return false;
    return true; // 🎯 T is sufficient for the needs
};
