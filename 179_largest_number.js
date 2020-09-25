/*
 * 179. Largest Number
 *
 * Q: https://leetcode.com/problems/largest-number/
 * A: https://leetcode.com/problems/largest-number/discuss/864389/Javascript-Python3-C%2B%2B-Concise-solutions
 */

// 1-liner (just for fun!)
let largestNumber = (A, S = A.map(String).sort((a, b) => (b + a).localeCompare(a + b))) => S.every(word => word == '0') ? '0' : S.join('');

let largestNumber = A => {
    let S = A.map(String);
    S.sort((a, b) => (b + a).localeCompare(a + b));
    return S.every(word => word == '0') ? '0' : S.join('');
};
