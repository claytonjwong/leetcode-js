/*

1249. Minimum Remove to Make Valid Parentheses

Q: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
A: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/discuss/420213/Javascript-and-C%2B%2B-solutions

*/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = (s, t=[], del=new Set(), stack=[]) => {
    for (let i=0; i < s.length; ++i) {
        if (s[i] == '(')
            stack.push(i);
        if (s[i] == ')') {
            if (stack.length == 0)
                del.add(i);
            else
                stack.pop();
        }
    }
    if (stack.length > 0)
        stack.forEach(i => del.add(i));
    for (let i=0; i < s.length; ++i)
        if (!del.has(i))
            t.push(s[i]);
    return t.join('');
};

let ans = minRemoveToMakeValid('))((');
console.log(ans);
