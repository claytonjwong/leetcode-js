/*
 * 678. Valid Parenthesis String
 *
 * Q: https://leetcode.com/problems/valid-parenthesis-string/
 * A: https://leetcode.com/problems/valid-parenthesis-string/discuss/128527/Short-and-Simple-C%2B%2B-(-EASY-to-understand-)
 */

let checkValidString = S => {
    let N = S.length;
    let go = (i = 0, open = 0) => {
        if (i == N)
            return open == 0;
        if (open < 0)
            return false;
        if (S[i] == '(') return go(i + 1, open + 1);
        if (S[i] == ')') return go(i + 1, open - 1);
        return go(i + 1, open - 1) || go(i + 1, open + 1) || go(i + 1, open); // '(' || ')' || ''
    };
    return go();
};