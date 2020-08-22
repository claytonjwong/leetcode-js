/*
 * https://leetcode.com/contest/biweekly-contest-33/ranking
 *
 * Rank            Name            Score    Finish Time    Q1 (3)     Q2 (4)    Q3 (5)    Q4 (6)
 * 4704 / 11366    claytonjwong    7        0:37:57        0:08:07    0:37:57
 */


/*
 * 1556. Thousand Separator
 *
 * Q: https://leetcode.com/problems/thousand-separator/
 * A: https://leetcode.com/problems/thousand-separator/discuss/805674/Javascript-Python3-C%2B%2B-1-Liners
 */

let thousandSeparator = n => n < 1000 ? String(n) : thousandSeparator(Math.floor(n / 1000)) + '.' + _.padStart(String(n % 1000), 3, 0);


/*
 * 1557. Minimum Number of Vertices to Reach All Nodes
 *
 * Q: https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
 * A: https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/discuss/805698/Javascript-Python3-C%2B%2B-In-Degree-0
 */

let findSmallestSetOfVertices = (N, E) => {
    let deg = Array(N).fill(0);
    E.forEach(([_, tail]) => ++deg[tail]);
    return deg.map((x, i) => x ? -1 : i).filter(x => -1 < x);
};

// simplified
let findSmallestSetOfVertices = (N, E) => {
    let all = new Set([...Array(N).keys()]);
    E.forEach(([_, tail]) => all.delete(tail));
    return [...all];
};
