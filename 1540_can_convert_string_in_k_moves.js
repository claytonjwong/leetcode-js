/*
 * 1540. Can Convert String in K Moves
 *
 * Q: https://leetcode.com/problems/can-convert-string-in-k-moves/
 * A: https://leetcode.com/problems/can-convert-string-in-k-moves/discuss/780454/Javascript-Python3-C%2B%2B-add-%2B-del-needs
 */
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
