/*
 * 1672. Richest Customer Wealth
 *
 * Q: https://leetcode.com/problems/richest-customer-wealth/
 * A: https://leetcode.com/problems/richest-customer-wealth/discuss/952772/Kt-Js-Py3-Cpp-1-Liners
 */

let maximumWealth = A => Math.max(...A.map(row => _.sum(row)));
