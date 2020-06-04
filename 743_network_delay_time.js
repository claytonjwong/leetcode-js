/*
 * 743. Network Delay Time
 *
 * Q: https://leetcode.com/problems/network-delay-time/
 * A: https://leetcode.com/problems/network-delay-time/discuss/656011/Javascript-and-C%2B%2B-solutions
 */
let networkDelayTime = (E, N, K) => {
    let dist = Array(N + 1).fill(Infinity); // +1 for 1-based indexing
    dist[0] = dist[K] = 0;
    while (--N)
        for (let [u, v, w] of E)
            if (dist[v] > dist[u] + w)
                dist[v] = dist[u] + w;
    let max = Math.max(...dist);
    return max < Infinity ? max : -1;
};