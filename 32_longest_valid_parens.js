/*
 * 32. Longest Valid Parentheses
 *
 * Q: https://leetcode.com/problems/longest-valid-parentheses/
 * A: https://leetcode.com/problems/longest-valid-parentheses/discuss/513059/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {string} s
 * @return {number}
 */

let longestValidParentheses = (s, stack = [], ans = 0) => {
    let N = s.length;
    let valid = Array(N).fill(false);
    for (let i = 0; i < N; ++i) {
        if (s[i] == '(')
            stack.push(i);
        if (s[i] == ')' && stack.length > 0) {
            let j = stack[stack.length - 1];
            valid[i] = valid[j] = true;
            stack.pop();
        }
    }
    for (let i = 0; i < N; ++i) {
        if (!valid[i])
            continue;
        let j = i;
        for (; j < N && valid[j]; ++j);
        ans = Math.max(ans, j - i);
        i = j;
    }
    return ans;
};