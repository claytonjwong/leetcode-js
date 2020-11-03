/*
 * 1446. Consecutive Characters
 *
 * Q: https://leetcode.com/problems/consecutive-characters/
 * A: https://leetcode.com/problems/consecutive-characters/discuss/639815/Kt-Js-Py3-Cpp-Best-Same
 */

// last
let maxPower = (s, last = '0', same = 1, best = 1) => {
    for (let c of s)
        if (last == c)
            best = Math.max(best, ++same);
        else
            last = c, same = 1;
    return best;
};

// index
let maxPower = (s, same = 1, best = 1) => {
    for (let i = 1; i < s.length; ++i)
        if (s[i - 1] == s[i])
            best = Math.max(best, ++same);
        else
            same = 1;
    return best;
}
