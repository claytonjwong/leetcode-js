/*
 * 1579. Remove Max Number of Edges to Keep Graph Fully Traversable
 *
 * Q: https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/
 * A: https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/discuss/848649/Javascript-Python3-C%2B%2B-Union-Find-%2B-Greedy
 */

let maxNumEdgesToRemove = (N, E, same = 0) => {
    E = E.map(([ _, u, v ]) => [ _, u - 1, v - 1]);             // ⭐️ -1 for 1-based to 0-based indexing
    let A = [...Array(N).keys()],                               // 🙂 parent representatives of disjoint sets for Alice
        B = [...Array(N).keys()];                               // 🙂 parent representatives of disjoint sets for Bob
    let find = (P, x) => P[x] = P[x] == x ? x : find(P, P[x]);
    let union = (P, a, b) => {
        a = find(P, a);
        b = find(P, b);
        if (a == b)
            return 1;
        P[a] = b;  // arbitrary choice
        return 0;
    };
    E.forEach(([ type, u, v ]) => {
        if (type == 3) same += union(A, u, v) | union(B, u, v);  // 🥇 first: 🔗 union shared edges for Alice and Bob
    });
    E.forEach(([ type, u, v ]) => {
        if (type == 1) same += union(A, u, v);                   // 🥈 second: 🔗 union edges for Alice
        if (type == 2) same += union(B, u, v);                   //            🔗 union edges for Bob
    });
    // 🎯 is there a single connected component for Alice and Bob?
    // if so, return the amount of edges which redundantly connect
    // to each same connected component for Alice and Bob
    return A.every(x => find(A, 0) == find(A, x)) &&
           B.every(x => find(B, 0) == find(B, x)) ? same : -1;
};
