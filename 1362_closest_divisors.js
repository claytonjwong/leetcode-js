/*
 * 1362. Closest Divisors
 *
 * Q: https://leetcode.com/problems/closest-divisors/
 * A: https://leetcode.com/problems/closest-divisors/discuss/523218/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number} num
 * @return {number[]}
 */

let closestDivisors = (x, a = 0, b = 0, diff = Number(1e9 + 7), floor = Math.floor, abs = Math.abs) => {
    for (let i = 1; i * i <= x + 2; ++i) {
        let j = floor((x + 1) / i),
            k = floor((x + 2) / i);
        if (i * j == x + 1 && abs(i - j) < diff) a = i, b = j, diff = abs(i - j);
        if (i * k == x + 2 && abs(i - k) < diff) a = i, b = k, diff = abs(i - k);
    }
    return [a, b];
};