/*
 * 453. Minimum Moves to Equal Array Elements
 *
 * Q: https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
 * A: https://leetcode.com/problems/minimum-moves-to-equal-array-elements/discuss/492864/Javascript-Python3-C%2B%2B-Min-Element
 */

let minMoves = (A, low = Math.min(...A)) => _.sum(A.map(x => x - low));
