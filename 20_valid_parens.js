/*
 * 20. Valid Parentheses
 *
 * Q: https://leetcode.com/problems/valid-parentheses/
 * A: https://leetcode.com/problems/valid-parentheses/discuss/9214/Kt-Js-Py3-Cpp-Stack
 */

let isValid = (A, s = []) => {
    for (let c of A)
        if      (c == '(') s.push(')')
        else if (c == '[') s.push(']')
        else if (c == '{') s.push('}')
        else if (!s.length || c != s.pop())
            return false;
    return !s.length;
};
