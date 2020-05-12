/*
 * 1443. Minimum Time to Collect All Apples in a Tree
 *
 * Q: https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
 * A: https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/discuss/627010/Javascript-and-C%2B%2B-solutions
 */

// DFS
let minTime = (_, E, A, m = {}, seen = new Set(), ans = 0) => {
    for (let [u, v] of E) {
        if (!m[u]) m[u] = new Set();
        if (!m[v]) m[v] = new Set();
        m[u].add(v);
        m[v].add(u);
    }
    let go = (u = 0) => {
        seen.add(u);
        let found = A[u];
        for (let v of [...m[u]])
            if (!seen.has(v) && go(v))
                found = true, ans += 2; // apple found in subtree v 🎯
        return found;
    };
    go();
    return ans;
};

// Bellman-Ford
let minTime = (N, E, A, ans = 0) => {
    let dist = Array(N).fill(Infinity),
        prev = Array(N).fill(null);
    dist[0] = 0;
    while (N--) {
        for (let [u, v] of E)
            if (dist[v] > dist[u] + 1)
                dist[v] = dist[u] + 1,
                prev[v] = u;
    }
    let seen = new Set([0]);
    for (let i = 0; i < A.length; ++i) {
        if (!A[i])
            continue; // no apple ❌
        let steps = 0;
        for (let j = i; !seen.has(j); j = prev[j])
            seen.add(j), ++steps;
        ans += 2 * steps; // 2x steps to first seen node 🎯
    }
    return ans;
};

// SPFA
let minTime = (N, E, A, m = {}, ans = 0) => {
    let dist = Array(N).fill(Infinity),
        prev = Array(N).fill(null);
    for (let [u, v] of E) {
        if (!m[u]) m[u] = new Set();
        if (!m[v]) m[v] = new Set();
        m[u].add(v);
        m[v].add(u);
    }
    dist[0] = 0;
    let q = [0];
    while (q.length) {
        let u = q.shift();
        for (let v of [...m[u]]) {
            if (dist[v] > dist[u] + 1) {
                dist[v] = dist[u] + 1;
                prev[v] = u;
                q.push(v);
            }
        }
    }
    let seen = new Set([0]);
    for (let i = 0; i < A.length; ++i) {
        if (!A[i])
            continue; // no apple ❌
        let steps = 0;
        for (let j = i; !seen.has(j); j = prev[j])
            seen.add(j), ++steps;
        ans += 2 * steps; // 2x steps to first seen node 🎯
    }
    return ans;
};