/*
 * 1502. Can Make Arithmetic Progression From Sequence
 *
 * Q: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
 * A: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/discuss/721803/Javascript-and-C%2B%2B-solutions
 */

let canMakeArithmeticProgression = (A, T) => A.sort((a, b) => a - b).every((_, i) => !i || A[i - 1] - A[i] == A[0] - A[1]);
