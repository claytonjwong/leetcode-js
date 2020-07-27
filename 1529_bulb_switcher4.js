/*
 * 1529. Bulb Switcher IV
 *
 * Q: https://leetcode.com/problems/bulb-switcher-iv/
 * A: https://leetcode.com/problems/bulb-switcher-iv/discuss/755780/Javascript-Python3-C%2B%2B-count-bit-flips
 */
let minFlips = (s, cur = '0', cnt = 0) => {
    for (let c of s)
        if (cur != c)
            cur = c, ++cnt;
    return cnt;
};
