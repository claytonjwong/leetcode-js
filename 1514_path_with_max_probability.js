/*
 * 1514. Path with Maximum Probability
 *
 * Q: https://leetcode.com/problems/path-with-maximum-probability/
 * A: https://leetcode.com/problems/path-with-maximum-probability/discuss/740901/Javascript-and-C%2B%2B-solutions
 */

// Bellman-Ford (TLE)
let maxProbability = (N, E, A, s, t) => {
    let dist = Array(N).fill(0)
    dist[s] = 1;
    while (0 < N--) { // ⭐️ relax edges N - 1 times
        E.forEach(([u, v], i) => {
            let w = A[i];
            dist[u] = Math.max(dist[u], dist[v] * w);
            dist[v] = Math.max(dist[v], dist[u] * w);
        });
    }
    return dist[t];
};

// SPFA (AC)
let maxProbability = (N, E, A, s, t) => {
    let adj = [...Array(N)].map(_ => []);
    E.forEach(([u, v], i) => {
        let w = A[i];
        adj[u].push([ v, w ]);
        adj[v].push([ u, w ]);
    })
    let dist = Array(N).fill(0)
    dist[s] = 1;
    let q = [ s ];
    while (q.length) {
        let u = q.shift();
        for (let [v, w] of adj[u])
            if (dist[v] < dist[u] * w)
                dist[v] = dist[u] * w, q.push(v); // ⭐️ cherry pick v for subsequent edges under consideration to be relaxed
    }
    return dist[t];
};
