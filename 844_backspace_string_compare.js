/*
 * 844. Backspace String Compare
 *
 * Q: https://leetcode.com/problems/backspace-string-compare/
 * A: https://leetcode.com/problems/backspace-string-compare/discuss/570905/Javascript-and-C%2B%2B-solutions
 */

let backspaceCompare = (A, B) => {
    let gen = (S, s = []) => {
        S.split('').forEach(c => {
            if (c != '#')
                s.push(c);
            else if (s.length > 0)
                s.pop();
        });
        return s.join('');
    }
    return gen(A) == gen(B);
};