/*
 * 227. Basic Calculator II
 *
 * Q: https://leetcode.com/problems/basic-calculator-ii/
 * A: https://leetcode.com/problems/basic-calculator-ii/discuss/947645/Kt-Js-Py3-Cpp-Stack
 */

let calculate = (expr, S = [], x = 0, op = '+', isdigit = c => /[0-9]/.test(c)) => {
    let N = expr.length;
    for (let i = 0; i <= N; ++i) {
        if (i < N && expr[i] == ' ')
            continue;
        if (i < N && isdigit(expr[i])) {
            x = (10 * x) + Number(expr[i]);
            continue;
        }
        if (op == '+') S.push(x);
        if (op == '-') S.push(-x);
        if (op == '*') S.push(S.pop() * x);
        if (op == '/') S.push(parseInt(S.pop() / x, 10));
        x = 0, op = i < N ? expr[i] : '?';
    }
    return _.sum(S);
};
