/*
 * 1615. Maximal Network Rank
 *
 * Q: https://leetcode.com/problems/maximal-network-rank/
 * A: https://leetcode.com/problems/maximal-network-rank/discuss/888884/Kt-Js-Py3-Cpp-Brute-Force
 */

let maximalNetworkRank = (N, E, best = 0) => {
    let adj = [...Array(N)].map(_ => new Set());
    let degree = v => adj[v].size;
    for (let [u, v] of E)
        adj[u].add(v),
        adj[v].add(u);
    for (let i = 0; i < N; ++i)
        for (let j = i + 1; j < N; ++j)
            best = Math.max(best, degree(i) + degree(j) - adj[i].has(j));
    return best;
};
