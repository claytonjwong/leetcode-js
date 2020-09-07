/*
 * 290. Word Pattern
 *
 * Q: https://leetcode.com/problems/word-pattern/
 * A: https://leetcode.com/problems/word-pattern/discuss/622795/Javascript-Python3-C%2B%2B-.-Map-solutions
 */

let wordPattern = (A, B) => {
    let [ chars, words ] = [ A.split(''), B.split(' ') ];
    if (chars.length != words.length)
        return false;
    let N = chars.length;
    let [ P, T ] = [ {}, {} ]                 // 🗺 pattern, text
    for (let i = 0; i < N; ++i) {
        let [ c, w ] = [ chars[i], words[i] ];
        if (P[c] && P[c] != w) return false;  // 🚫 char c not mapped to word w
        if (T[w] && T[w] != c) return false;  // 🚫 word w not mapped to char c
        if (!P[c]) P[c] = w;                  // map char c 👉 word w
        if (!T[w]) T[w] = c;                  // map word w 👉 char c
    }
    return true;  // ✅ OK
};
