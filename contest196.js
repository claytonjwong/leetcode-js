/*
 * https://leetcode.com/contest/weekly-contest-196
 *
 * Weekly Contest 196 (Virtual)
 * Jul 05, 2020 at 3:29 PM
 * Duration    Score    Finish Time    AC    Ranking
 * 1 h 30 m    3/19     0:03:40        1/4   4003/8795
 */

/*
 * 1502. Can Make Arithmetic Progression From Sequence
 *
 * Q: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
 * A: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/discuss/721803/Javascript-and-C%2B%2B-solutions
 */
let canMakeArithmeticProgression = (A, T) => A.sort((a, b) => a - b).every((_, i) => !i || A[i - 1] - A[i] == A[0] - A[1]);
