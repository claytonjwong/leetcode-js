/*
 * 210. Course Schedule II
 *
 * Q: https://leetcode.com/problems/course-schedule-ii/
 * A: https://leetcode.com/problems/course-schedule-ii/discuss/742411/Javascript-Python3-C%2B%2B-DFS-%2B-BFS-Pruning
 */

// BFS pruning
let findOrder = (N, E, ans = []) => {
    let adj = [...Array(N)].map(_ => []); // adjacent children
    let cnt = [...Array(N)].fill(0);      // incoming edge count
    E.forEach(([v, u]) => {
        adj[u].push(v);
        ++cnt[v];
    });
    // ⭐️ BFS pruning of nodes with no incoming edge count
    let q = cnt.map((incoming, i) => !incoming ? i : Infinity).filter(i => i < Infinity);
    while (q.length) {
        let u = q.shift();
        ans.push(u); // 🎯 bfs pruned
        for (let v of adj[u])
            if (!--cnt[v])
                q.push(v);
    }
    return ans.length == N ? ans : [];
};

// DFS pruning
let findOrder = (N, E, ans = [], visiting = new Set(), visited = new Set()) => {
    let adj = [...Array(N)].map(_ => []); // adjacent children
    E.forEach(([v, u]) => adj[u].push(v));
    let go = u => {
        if (visited[u]) // 🤔 🔍 already visited
            return true;
        if (visiting[u]) // ❌ cycle
            return false;
        visiting[u] = true;  // 👀 ephemeral visiting: ✅ forward-tracking
        for (let v of adj[u])
            if (!go(v))
                return false;
        visiting[u] = false; // 👀 ephemeral visiting: 🚫 back-tracking
        visited[u] = true; // 🤔 📌 permanent visited
        ans.push(u); // 🎯 the answer is dfs pruned in reverse order, ie. as the recusive stack unwinds
        return true;
    };
    for (let i = 0; i < N; ++i)
        if (!go(i))
            return [];
    return ans.reverse(); // 🎯 the answer is dfs constructed in reverse order
}
