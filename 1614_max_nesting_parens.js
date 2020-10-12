/*
 * 1614. Maximum Nesting Depth of the Parentheses
 *
 * Q: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
 * A: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/discuss/888880/Kt-Js-Py3-C%2B%2B-Count-Depth
 */

let maxDepth = (S, cnt = 0, best = 0) => {
    for (let c of S) {
        if (c == '(') ++cnt, best = Math.max(best, cnt);
        if (c == ')') --cnt;
    }
    return best;
};
