/*
 * 507. Perfect Number
 *
 * Q: https://leetcode.com/problems/perfect-number/
 * A: https://leetcode.com/problems/perfect-number/discuss/595770/Javascript-and-C%2B%2B-solutions
 */

let checkPerfectNumber = (x, sum = 1) => {
    for (let i = 2; i * i <= x; ++i)
        if (x % i == 0)
            sum += i + (x / i);
    return x > 1 && x == sum;
};