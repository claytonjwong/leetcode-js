/*
 * 22. Generate Parentheses
 *
 * Q: https://leetcode.com/problems/generate-parentheses/
 * A: https://leetcode.com/problems/generate-parentheses/discuss/632525/Javascript-and-C%2B%2B-solutions
 */
let generateParenthesis = (N, ans = []) => {
    let go = (open = 0, close = 0, path = []) => {
        if (path.length == 2 * N) // target 🎯
            ans.push(path.join(''));
        if (open < N)     go(open + 1, close, path.concat('(')); // open
        if (open > close) go(open, close + 1, path.concat(')')); // close
    };
    go();
    return ans;
};