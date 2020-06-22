/*
 * 136. Single Number
 *
 * Q: https://leetcode.com/problems/single-number/
 * A: https://leetcode.com/problems/single-number/discuss/559253/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */

let singleNumber = (A, ans = 0) => {
    A.forEach(x => ans ^= x);
    return ans;
};

let singleNumber = A => A.reduce((a, b) => a ^ b, 0);
