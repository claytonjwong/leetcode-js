/*
 * 1688. Count of Matches in Tournament
 *
 * Q: https://leetcode.com/problems/count-of-matches-in-tournament/
 * A: https://leetcode.com/problems/count-of-matches-in-tournament/discuss/970250/Kt-Js-Py3-Cpp-1-Liners
 */

let numberOfMatches = (N, f = Math.floor) => N == 1 ? 0 : f(N / 2) + numberOfMatches(f(N / 2) + Number(N & 1));
