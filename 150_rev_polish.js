/*
 * 150. Evaluate Reverse Polish Notation
 *
 * Q: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * A: https://leetcode.com/problems/evaluate-reverse-polish-notation/discuss/893409/Kt-Js-Py3-Cpp-Stack-(c-a-op-b)
 */

let evalRPN = (A, S = []) => {
    for (let x of A) {
        if (!isNaN(Number(x))) {
            S.push(Number(x));
            continue;
        }
        let b = S.pop(),
            a = S.pop();
        let c = x == '+' ? a + b : x == '-' ? a - b : x == '*' ? a * b : (0 <= a && 0 <= b) || (a < 0 && b < 0) ? Math.floor(a / b) : Math.ceil(a / b);
        S.push(c);
    }
    return S.pop();
};
