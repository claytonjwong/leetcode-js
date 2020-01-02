/*
 * 684. Redundant Connection
 *
 * Q: https://leetcode.com/problems/redundant-connection/
 * A: https://leetcode.com/problems/redundant-connection/discuss/468028/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
let findRedundantConnection = edges => {
    let P = [...Array(1001)].map((_, i) => i);
    let find = x => {
        if (P[x] == x)
            return x;
        return P[x] = find(P[x]);
    }
    let union = (a, b) => {
        a = find(a);
        b = find(b);
        if (a == b)
            return false;
        P[a] = b; // arbitrary choice
        return true;
    };
    for (let [u, v] of edges)
        if (!union(u, v))
            return [u, v];
};