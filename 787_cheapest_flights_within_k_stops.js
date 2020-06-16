/*
 * 787. Cheapest Flights Within K Stops
 *
 * Q: https://leetcode.com/problems/cheapest-flights-within-k-stops/
 * A: https://leetcode.com/problems/cheapest-flights-within-k-stops/discuss/690997/Javascript-and-C%2B%2B-solutions
 */

let findCheapestPrice = (_, A, src, dst, hops, adj = new Map(), best = Infinity) => {
    A.forEach(([u, v, w]) => adj.set(u, (adj.get(u) || new Set()).add([v, w])));
    let go = (u = src, k = hops + 1, cost = 0, seen = new Set()) => {
        if (u == dst)
            best = Math.min(best, cost); // best is the minimum cost 🎯
        if (u == dst || !k)
            return; // destination reached or k-hops exhausted: stop 🛑
        seen.add(u); // 👀 ✅ forward-tracking
        for (let [v, w] of [...adj.get(u) || []])
            if (!seen.has(v) && cost + w < best) // pruning condition: cost + w < best 🤔
                go(v, k - 1, cost + w, seen);
        seen.delete(u); // 👀 ❌ back-tracking
    };
    go();
    return best < Infinity ? best : -1;
};