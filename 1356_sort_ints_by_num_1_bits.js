/*
 * 1356. Sort Integers by The Number of 1 Bits
 *
 * Q: https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
 * A: https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/discuss/519440/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */

let sortByBits = A => {
    return A
        .map(x => [x.toString(2).split('').filter(c => c == '1').length, x])
        .sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0])
        .map(a => a[1]);
};

let ans = sortByBits([0,1,2,3,4,5,6,7,8]);
console.log(ans);