/*
 * 1029. Two City Scheduling
 *
 * Q: https://leetcode.com/problems/two-city-scheduling/
 * A: https://leetcode.com/problems/two-city-scheduling/discuss/655880/Javascript-and-C%2B%2B-solutions
 */

let twoCitySchedCost = A =>
    A.sort(([a1, b1], [a2, b2]) => (a1 - b1) - (a2 - b2))
     .reduce((sum, [a, b], i) => sum + (i < A.length / 2 ? a : b), 0);
