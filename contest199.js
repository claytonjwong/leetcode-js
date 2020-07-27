/*
 * Contest: https://leetcode.com/contest/weekly-contest-199
 * Screenshare: https://www.youtube.com/watch?v=ufTyfhb0wQY&feature=youtu.be
 *
 * Rank            Name             Score    Finish Time    Q1 (3)     Q2 (4)	     Q3 (5)     Q4 (8)
 * 6247 / 14309    claytonjwong     7        0:32:15        0:04:16    0:27:15 *1
 */

/*
 * 1528. Shuffle String
 *
 * Q: https://leetcode.com/problems/shuffle-string/
 * A: https://leetcode.com/problems/shuffle-string/discuss/756041/Javascript-Python3-C%2B%2B-create-t-from-s
 */
let restoreString = (s, A) => _.zip(A, s.split('')).sort((a, b) => a[0] - b[0]).map(pair => pair[1]).join('');

let restoreString = (s, A) => {
    let N = A.length;
    let t = Array(N);
    for (let i = 0; i < N; ++i)
        t[A[i]] = s[i];
    return t.join('');
};

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
