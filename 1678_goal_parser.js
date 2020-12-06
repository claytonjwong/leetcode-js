/*
 * 1678. Goal Parser Interpretation
 *
 * Q: https://leetcode.com/problems/goal-parser-interpretation/
 * A: https://leetcode.com/problems/goal-parser-interpretation/discuss/962100/Kt-Js-Py3-Cpp-Linear-Scan-%2B-Last-Seen
 */

let interpret = (s, last = 'x', ans = []) => {
    s.split('').forEach(c => {
        if (c == 'G') ans.push('G');
        if (c == ')') ans.push(last == '(' ? 'o' : 'al');
        last = c;
    });
    return ans.join('');
};
