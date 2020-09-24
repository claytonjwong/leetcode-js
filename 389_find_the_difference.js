/*
 * 389. Find the Difference
 *
 * Q: https://leetcode.com/problems/find-the-difference/
 * A: https://leetcode.com/problems/find-the-difference/discuss/862287/Javascript-Python3-C%2B%2B-Concise-solutions
 */

 let findTheDifference = (s, t) =>
    String.fromCharCode(_.sum(t.split('').map(c => c.charCodeAt(0))) - _.sum(s.split('').map(c => c.charCodeAt(0))));
