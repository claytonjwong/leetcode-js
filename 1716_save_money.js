/*
 * 1716. Calculate Money in Leetcode Bank
 *
 * Q: https://leetcode.com/problems/calculate-money-in-leetcode-bank/
 * A: https://leetcode.com/problems/calculate-money-in-leetcode-bank/discuss/1008853/Kt-Js-Py3-Cpp-Iterative-Accumulation
 */

let totalMoney = (n, start = 1, day = 0, x = 0, total = 0) => {
    while (n--) {
        if (day++ % 7 == 0)
            x = start++;
        total += x++;
    }
    return total;
};
