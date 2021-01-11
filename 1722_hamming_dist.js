/*
 * 1722. Minimize Hamming Distance After Swap Operations
 *
 * Q: https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/
 * A: https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/discuss/1009782/Kt-Js-Py3-Cpp-Union-Find-%2B-Set-Diff
 */

let minimumHammingDistance = (s, t, A, ms = {}, mt = {}, dist = 0) => {
    let N = s.length;
    let P = [...Array(N).keys()];  // 🔗  N disjoint parent representatives of unioned indices
    let find = x => P[x] = P[x] == x ? x : find(P[x]);
    let union = (a, b) => {
        a = find(a);
        b = find(b);
        P[a] = b;  // 🎲 arbitrary choice
    };
    A.forEach(([i, j]) => union(i, j));
    for (let i = 0; i < N; ++i) {
        let x = find(P[i]);
        if (!ms[x]) ms[x] = [];
        if (!mt[x]) mt[x] = [];
        ms[x].push(s[i]);
        mt[x].push(t[i]);
    }
    let diff = x => {
        let m = new Map();
        ms[x].forEach(val => m.set(val,  1 + (m.get(val) || 0)));
        mt[x].forEach(val => m.set(val, -1 + (m.get(val) || 0)));
        let pairs = _.sum([...m].map(([_, cnt]) => Math.abs(cnt)));
        return Math.floor(pairs / 2);
    };
    return _.sum([...new Set([...P].map(find))].map(diff));
};
