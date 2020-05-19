/*
 * 1446. Consecutive Characters
 *
 * Q: https://leetcode.com/problems/consecutive-characters/
 * A: https://leetcode.com/problems/consecutive-characters/discuss/639815/Javascript-and-C%2B%2B-solutions
 */

let maxPower = (s, max = 1) => {
    for (let i = 1, same = 1; i < s.length; ++i)
        if (s[i - 1] == s[i])
            max = Math.max(max, ++same);
        else
            same = 1;
    return max;
};