/*
 * 1584. Min Cost to Connect All Points
 *
 * Q: https://leetcode.com/problems/min-cost-to-connect-all-points/
 * A: https://leetcode.com/problems/min-cost-to-connect-all-points/discuss/850003/Javascript-Python3-C%2B%2B-Kruskal's-MST
 */

// kruskal
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

// prim
let heapkey = x => Array.isArray(x) ? x[0] : x;
let heappush = (A, x, f = Math.min) => {
    let P = i => Math.floor((i - 1) / 2);  // parent
    A.push(x);
    let N = A.length,
        i = N - 1;
    while (0 < i && heapkey(A[i]) == f(heapkey(A[i]), heapkey(A[P(i)]))) {
        [A[i], A[P(i)]] = [A[P(i)], A[i]];
        i = P(i);
    }
};
let heappop = (A, x, f = Math.min) => {
    let L = i => 2 * i + 1,  // children
        R = i => 2 * i + 2;
    let N = A.length,
        i = 0;
    let top = A[0];
    [A[0], A[N - 1]] = [A[N - 1], A[0]], A.pop(), --N;
    let ok = true;
    do {
        ok = true;
        let left = f == Math.min ? Infinity : -Infinity,
            right = left;
        if (L(i) < N && heapkey(A[i]) != f(heapkey(A[i]), heapkey(A[L(i)]))) ok = false, left  = heapkey(A[L(i)]);
        if (R(i) < N && heapkey(A[i]) != f(heapkey(A[i]), heapkey(A[R(i)]))) ok = false, right = heapkey(A[R(i)]);
        if (!ok) {
            let j = left == f(left, right) ? L(i) : R(i);
            [A[i], A[j]] = [A[j], A[i]];
            i = j;
        }
    } while (!ok);
    return top;
};
let minCostConnectPoints = (A, abs = Math.abs, total = 0) => {
    let N = A.length;
    let cand = new Set([...Array(N - 1).keys()].map(i => i + 1));
    let E = [...Array(N)].map(_ => Array(N).fill(0));
    for (let u = 0; u < N; ++u) {
        let [x1, y1] = A[u];
        for (let v = u + 1; v < N; ++v) {
            let [x2, y2] = A[v];
            let cost = abs(x1 - x2) + abs(y1 - y2);
            E[u][v] = cost;
            E[v][u] = cost;
        }
    }
    let s = 0;
    let q = [];
    let best = Array(N).fill(Infinity);
    for (let v = 1; v < N; ++v) {
        if (best[v] > E[s][v]) {
            best[v] = E[s][v];
            heappush(q, [best[v], v]);
        }
    }
    while (cand.size) {
        let [cost, u] = heappop(q);
        if (!cand.has(u))
            continue;
        cand.delete(u);
        total += cost;
        for (let v = 0; v < N; ++v) {
            if (!cand.has(v))
                continue;
            if (best[v] > E[u][v]) {
                best[v] = E[u][v];
                heappush(q, [best[v], v]);
            }
        }
    }
    return total;
};