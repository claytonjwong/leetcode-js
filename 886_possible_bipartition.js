/*
 * 886. Possible Bipartition
 *
 * Q: https://leetcode.com/problems/possible-bipartition/
 * A: https://leetcode.com/problems/possible-bipartition/discuss/655306/Javascript-and-C%2B%2B-solutions
 */

let possibleBipartition = (N, E, m = new Map(), q = [], seen = new Set()) => {
    for (let [u, v] of E)
        m.set(u, (m.get(u) || new Set()).add(v)),
        m.set(v, (m.get(v) || new Set()).add(u));
    let color = Array(N + 1).fill(-1); // +1 for 1-based indexing, -1 == no color
    while (N--) {
        if (!seen.has(N))
            q.push(N), seen.add(N);
        while (q.length) {
            let cur = q.shift();
            if (color[cur] == -1)
                color[cur] = 0; // arbitrary default choice for color (this could also be 1)
            for (let adj of [...(m.get(cur) || [])]) {
                if (color[adj] == color[cur]) // adjacent node with same color ❌
                    return false;
                if (seen.has(adj))
                    continue;
                color[adj] = color[cur] ^ 1;
                q.push(adj), seen.add(adj);
            }
        }
    }
    return true; // all adjacent nodes have opposite colors ✅
};

console.log(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]]));
console.log(possibleBipartition(3, [[1, 2], [1, 3], [2, 3]]));