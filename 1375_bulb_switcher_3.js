/*
 * 1375. Bulb Switcher III
 *
 * Q: https://leetcode.com/problems/bulb-switcher-iii
 * A: https://leetcode.com/problems/bulb-switcher-iii/discuss/532580/Javascript-solution
 */

/**
 * @param {number[]} light
 * @return {number}
 */
let numTimesAllBlue = (A, seen = new Set(), max = 0, ans = 0) => {
    for (let i = 0; i < A.length; ++i) {
        max = Math.max(max, A[i]);
        seen.add(A[i]);
        if (max == seen.size)
            ++ans;
    }
    return ans;
};