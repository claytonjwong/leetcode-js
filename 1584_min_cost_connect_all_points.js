/*
 * 1584. Min Cost to Connect All Points
 *
 * Q: https://leetcode.com/problems/min-cost-to-connect-all-points/
 * A: https://leetcode.com/problems/min-cost-to-connect-all-points/discuss/850003/Javascript-Python3-C%2B%2B-Kruskal's-MST
 */

let minCostConnectPoints = (A, E = [], abs = Math.abs, total = 0) => {
    let N = A.length;
    let P = [...Array(N).keys()];                               // 🙂 parent representatives of N disjoint sets
    for (let u = 0; u < N; ++u) {
        let [ x1, y1 ] = A[u];
        for (let v = u + 1; v < N; ++v) {
            let [ x2, y2 ] = A[v];
            let w = abs(x1 - x2) + abs(y1 - y2);
            E.push([ u, v, w ]);                                // 🗺 edge u, v with weight w 💰
        }
    }
    E.sort(([u1, v1, w1], [u2, v2, w2]) => w1 - w2);            // ⭐️ sort edges by weight w 💰
    let find = x => P[x] = P[x] == x ? x : find(P[x]);
    let union = (a, b) => {
        a = find(a);
        b = find(b);
        if (a == b)
            return false;
        P[a] = b;                                               // 🎲 arbitrary choice
        return true;
    };
    return _.sum(E.map(([ u, v, w ]) => union(u, v) ? w : 0));  // 🎯 sum of minimum edge weights w 💰 to construct Kruskal's MST
};
