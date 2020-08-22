/*
 * 1556. Thousand Separator
 *
 * Q: https://leetcode.com/problems/thousand-separator/
 * A: https://leetcode.com/problems/thousand-separator/discuss/805674/Javascript-Python3-C%2B%2B-1-Liners
 */

let thousandSeparator = n => n < 1000 ? String(n) : thousandSeparator(Math.floor(n / 1000)) + '.' + _.padStart(String(n % 1000), 3, 0);
