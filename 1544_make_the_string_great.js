/*
 * 1544. Make The String Great
 *
 * Q: https://leetcode.com/problems/make-the-string-great/
 * A: https://leetcode.com/problems/make-the-string-great/discuss/780878/Javascript-Python3-C%2B%2B-solutions
 */

let makeGood = (t, s = []) => {
    for (let c of t)
        for (s.push(c); 2 <= s.length && Math.abs(s[s.length - 2].charCodeAt(0) - s[s.length - 1].charCodeAt(0)) == 32; s.pop(), s.pop());
    return s.join('');
};
