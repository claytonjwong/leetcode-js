/*
 * 908. Smallest Range I
 *
 * Q: https://leetcode.com/problems/smallest-range-i/
 * A: https://leetcode.com/problems/smallest-range-i/discuss/601852/Javascript-and-C%2B%2B-solutions
 */

let smallestRangeI = (A, K) => {
    let min = Math.min(...A) + K,
        max = Math.max(...A) - K;
    return max < min ? 0 : max - min;
};