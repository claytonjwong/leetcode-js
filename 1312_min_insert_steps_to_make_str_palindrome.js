/*
 * 1312. Minimum Insertion Steps to Make a String Palindrome
 *
 * Q: https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
 * A: https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/discuss/472599/Javascript-and-C%2B%2B-solutions
 */

// TLE without memo
/*
let minInsertions = s => {
    let go = (s, i, j) => {
        if (i >= j)
            return 0;
        if (s[i] == s[j])
            return go(s, i + 1, j - 1);
        return 1 + Math.min(go(s, i + 1, j), go(s, i, j - 1));
    };
    return go(s, 0, s.length - 1);
};
*/

/*
let minInsertions = (s, memo = [...Array(501)].map(x => Array(501).fill(-1))) => {
    let go = (s, i, j) => {
        if (memo[i][j] > -1)
            return memo[i][j];
        if (i >= j)
            return memo[i][j] = 0;
        if (s[i] == s[j])
            return memo[i][j] = go(s, i + 1, j - 1);
        return memo[i][j] = 1 + Math.min(go(s, i + 1, j), go(s, i, j - 1));
    };
    return go(s, 0, s.length - 1);
};
*/

let minInsertions = (s, m = [...Array(501)].map(x => Array(501).fill(-1))) => {
    let go = (s, i, j) => {
        return m[i][j] =
            m[i][j] > -1 ? m[i][j] :
            i >= j ? 0 :
            s[i] == s[j] ? go(s, i + 1, j - 1) :
            1 + Math.min(go(s, i + 1, j), go(s, i, j - 1));
    };
    return go(s, 0, s.length - 1);
};
console.log(minInsertions("bypqsvqpzruzlagimzxuejvxjrrzcsjakirmlsyqehmndhqgzqsogrtvzpnqbpmavcqtmmfesbfpnoyzrekvtwphdgwxoovpsxusfbxbofvzenivkududlgeiqjllvuavqcjupcdztdensvntciozyjfcxsqawbajtzjbkyoadjluayyaluscgopqnkzidyzwokryhcsjlhvyyxzghdrcjjfxyjdpfe"));