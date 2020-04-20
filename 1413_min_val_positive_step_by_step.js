/*
 * 1413. Minimum Value to Get Positive Step by Step Sum
 *
 * Q: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
 * A: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/discuss/588198/Javascript-and-C%2B%2B-solutions
 */

let minStartValue = (A, sum = 0, min = 101) => {
    A.forEach(x => min = Math.min(min, sum += x));
    return Math.max(1 - min, 1);
};