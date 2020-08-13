/*
 * 1021. Remove Outermost Parentheses
 *
 * Q: https://leetcode.com/problems/remove-outermost-parentheses/
 * A: https://leetcode.com/problems/remove-outermost-parentheses/discuss/275804/Javascript-Python3-C%2B%2B-Stack-solutions
 */

let removeOuterParentheses = (parens, s = [], x = []) => {
    parens.split('').forEach(c => {
        if (c == ')') s.pop();
        if (s.length) x.push(c);
        if (c == '(') s.push(c);
    });
    return x.join('');
};
