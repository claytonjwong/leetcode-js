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

let singleNumber = (A, res = 0) => {
    A.forEach(x => res ^= x);
    return res;
};