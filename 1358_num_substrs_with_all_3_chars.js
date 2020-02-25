/*
 * 1358. Number of Substrings Containing All Three Characters
 *
 * Q: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
 * A: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/discuss/520463/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {string} s
 * @return {number}
 */
let numberOfSubstrings = (s, cnt = { a: 0, b: 0, c: 0 }, ans = 0) => {
    for (let i = 0, j = 0; j < s.length; ++j) {
        ++cnt[s[j]];
        while (cnt.a && cnt.b && cnt.c) --cnt[s[i++]];
        ans += i;
    }
    return ans;
};
