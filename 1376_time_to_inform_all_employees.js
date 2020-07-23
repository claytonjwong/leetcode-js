/*
 * 1376. Time Needed to Inform All Employees
 *
 * Q: https://leetcode.com/problems/time-needed-to-inform-all-employees/
 * A: https://leetcode.com/problems/time-needed-to-inform-all-employees/discuss/534379/Javascript-and-C%2B%2B-solutions
 */

// DFS
let numOfMinutes = (N, root, A, cost) => {
    let adj = [...Array(N)].map(_ => []);
    A.forEach((u, v) => -1 < u ? adj[u].push(v) : null);
    let go = (u, max = 0) => {
        for (let v of adj[u])
            max = Math.max(max, go(v));
        return cost[u] + max;
    };
    return go(root);
};

// BFS
let numOfMinutes = (N, root, A, cost, max = 0) => {
    let adj = [...Array(N)].map(_ => []);
    A.forEach((u, v) => -1 < u ? adj[u].push(v) : null);
    let dist = Array(N).fill(0);
    let q = [ root ];
    while (q.length) {
        let u = q.shift();
        for (let v of adj[u]) {
            dist[v] = dist[u] + cost[u];
            max = Math.max(max, dist[v])
            q.push(v);
        }
    }
    return max;
};
