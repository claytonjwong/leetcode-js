/*
 * 455. Assign Cookies
 *
 * Q: https://leetcode.com/problems/assign-cookies/
 * A: https://leetcode.com/problems/assign-cookies/discuss/93990/Javascript-Python3-C%2B%2B-Greedy
 */

// concise
let findContentChildren = (need, have, i = 0) => {
    need.sort((a, b) => a - b);
    have.sort((a, b) => a - b);
    for (let j = 0; i < need.length && j < have.length; ++j)
        if (need[i] <= have[j])
            ++i;
    return i;
};

// verbose
let findContentChildren = (need, have, cnt = 0) => {
    need.sort((a, b) => a - b);
    have.sort((a, b) => a - b);
    let j = 0;
    for (let i = 0; i < need.length; ++i) {
        while (j < have.length && !(need[i] <= have[j]))
            ++j;
        if (j < have.length && need[i] <= have[j])
            ++cnt,
            ++j;
    }
    return cnt;
};
